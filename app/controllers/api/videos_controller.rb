class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:show, :update, :destroy]

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      render json: @user.videos
    else
      render json: Video.all
    end
  end

  def show
    render json: @video
  end

  def create
    video = current_user.videos.new(video_params)

    if video.save
      render json: video
    else
      render json: video.errors, status: 422
    end
  end

  def update
    if @video.update(video_params)
      render json: @video
    else
      render json: @video.errors, status: 422
    end
  end

  def destroy
    @video.destroy
  end

  private
    def set_video
      @video = Video.find(params[:id])
    end

    def video_params
      params.require(:video).permit(:title, :duration, :genre, :description, :trailer)
    end
end

