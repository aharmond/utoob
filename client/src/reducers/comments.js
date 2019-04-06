import axios from 'axios'

const COMMENTS = 'COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export const getComments = (setLoaded) => {
  return (dispatch) => {
    axios.get(`/api/videos/${this.props.id}/comments`)
    .then( res => dispatch({ type: COMMENTS, comments: res.data }))
    .then( setLoaded )
  }
}

export const addComment = (comment, video_id) => {
  return (dispatch) => {
    axios.post(`/api/videos/${video_id}/comments`, { comment })
    .then( res => dispatch({ type: ADD_COMMENT, comment: res.data }))
  }
}

export const updateComment = (comment, video_id) => {
  return (dispatch) => {
    axios.put(`/api/videos/${video_id}/comments/${comment.id}`, { comment })
    .then( res => dispatch({ type: UPDATE_COMMENT, comment: res.data }))
  }
}

export const deleteComment = (id) => {
  return (dispatch) => {
    axios.delete(`/api/comments/${id}`)
    .then( () => dispatch({ type: DELETE_COMMENT, id }) )
  }
}

const comments = ( state = [], action ) => {
  switch(action.type) {
    case 'COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
      return [action.comment, ...state]
    case 'DELETE_COMMENT':
      return state.filter((comment) => comment.id !== action.id)
    case 'UPDATE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.comment.id)
          return action.comment
        return comment
      })
    default:
      return state
  }
}

export default comments