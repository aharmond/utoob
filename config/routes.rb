Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: [:show, :update,] do
      resources :comments, only: [:index]
      resources :videos, only: [:index]
    end
  end

  namespace :api do
    resources :videos do
      resources :comments, only: [:index, :create, :update, :destroy]
    end
  end
end
