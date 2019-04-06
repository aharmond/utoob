import React from 'react';
import axios from 'axios';
import { Segment, Image, Divider, Form, } from 'semantic-ui-react';

class CommentsView extends React.Component {
  state = { comments: [], author: '', post: '' }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.id}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
    this.setState({ author: this.props.name })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    const comment = { author: this.state.author, post: this.state.post, }
    e.preventDefault()
    axios.post(`/api/videos/${this.props.id}/comments`, comment)
      .then( res => {
        this.props.resetComments()
        this.setState({ post: '' })
      })
  }

  resetComments = () => {
    axios.get(`/api/videos/${this.props.id}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
  }

  render() {
    const { comments, post,  } = this.state
    return(
      <>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.TextArea
                name='post'
                value={post}
                onChange={this.handleChange}
                required
              />
            <Form.Button color='red' content='Submit'/>
          </Form>
        </Segment>
        {comments.map ( comment =>
          <Segment key={ comment.id }>
            <Image
              src='https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
              size='medium'
              floated='left'
            />
            {comment.author}
            <Divider hidden />
            {comment.post}
          </Segment>
        )
      }
      </>
    )
  }
}

export default CommentsView