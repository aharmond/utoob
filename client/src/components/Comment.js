import React from 'react'
import { connect } from 'react-redux';
import { Button, Icon, Header, Image, Segment, Grid } from 'semantic-ui-react'
import CommentForm from './CommentForm'
import { deleteComment } from '../reducers/comments'
import { AuthConsumer } from '../providers/AuthProvider'

const defaultImage = 'https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA';

class Comment extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  handleDelete = () => {
    const { comment, dispatch, history: { push } } = this.props
    dispatch(deleteComment(comment.id))
    push('/comments')
  }

  render() {
    const { comment = {} } = this.props
    const { showForm } = this.state
    const { auth: { user } } = this.props

    return (
      <Segment>
        <Grid>
          <Grid.Column width={3}>
            <Image src={defaultImage} style={{ width: '1cm', height: '1cm' }} />
          </Grid.Column>
          <Grid.Column width={13}>
            <div style={styles.div}>
              <Button inverted color='blue' onClick={this.toggleForm}>
                {showForm ? <Icon name='close' /> : <Icon name='edit' />}
              </Button>
              <Button inverted color='red' onClick={this.handleDelete}>
                <Icon name='trash' />
              </Button>
            </div>
            {showForm ?
              <CommentForm {...comment} video_id={this.props.video_id} closeForm={this.toggleForm} />
              :
              <div style={styles.div}>
                <p>{user.name}</p>
                <br />
                <p>{comment.post}</p>
              </div>
            }
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const styles = {
  div: {
    margin: '50px',
  },
}

const mapStateToProps = (state, props) => {
  return { comment: state.comments.find(comment => comment.id === parseInt(props.match.params.id)) }
}

const ConnectedComment = (props) => (
  <AuthConsumer>
    {auth =>
      <Comment {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default connect(mapStateToProps)(ConnectedComment)