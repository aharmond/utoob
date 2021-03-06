import React from 'react'
import { Header, Form, Input, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateComment, addComment } from '../reducers/comments';

class CommmentForm extends React.Component {
  initialState = { author: '', post: '', }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ ...this.props, })
    } else {
      this.setState({ author: this.props.author })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, closeForm, video_id } = this.props
    const comment = { ...this.state }
    const func = this.props.id ? updateComment : addComment
    dispatch(func(comment, video_id))
    // closeForm()
  }

  render() {
    const { id, author, post } = this.props

    return (
      <Segment>
        <br />
        <Header as='h1' style={styles.header}>
          { id ? 'Edit Comment' : 'Add Comment'}
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <br />
          <Input
            name='post'
            placeholder='Add a public comment'
            defaultValue={post}
            required
            onChange={this.handleChange}
            style={{ height: '100px', width: '100%', }}
          />
          <Form.Button inverted color='red' style = {styles.btn}>
            { id ? 'Update' : 'Post'}            
          </Form.Button>
        </Form>
        <br />
        <br />
      </Segment>
    )
  }
}

const styles = {
  btn: {
    margin: '20px'
  },
  header: {
    textAlign: 'center',
    color: 'deepskyblue',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    marginRight: '50px',
  }
}

export default connect()(CommmentForm)