import React from 'react'
import { connect } from 'react-redux'
import { Container, Item, Button, Icon } from 'semantic-ui-react';
import CommentForm from './CommentForm'
import Comment from './Comment'

class Comments extends React.Component {
  // state = { showForm: false, }

  // toggleForm = () => {
  //   this.setState( state => {
  //     return { showForm: !state.showForm, }
  //   })
  // }

  comments = () => {
    return this.props.comments.map( comment =>
      <Item key={ comment.id }>
        <Comment id={comment.id} video_id={this.props.id} />
      </Item>
    )
  }
  
  render() {
    // const { showForm } = this.state

    return (
      <>
        <CommentForm video_id={this.props.id} />
        <br />
        <Item.Group style={{ margin: '50px' }}>
          { this.comments() }
        </Item.Group>
        <br />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments, }
}

export default connect(mapStateToProps)(Comments)