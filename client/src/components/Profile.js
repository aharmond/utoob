import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Form, Grid, Image, Container, Divider, Header, Button } from 'semantic-ui-react'

const defaultImage = 'https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA';

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', } }

  componentDidMount() {
    const { auth: { user: { name, email } } } = this.props
    this.setState({ formValues: { name, email } })
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
      },
    });
  }

  profileView = () => {
    const { auth: { user } } = this.props
    return (
      <>
        <Grid.Column width={4}>
          <Image src={defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as='h1'>{user.name}</Header>
          <Header as='h1'>{user.email}</Header>
        </Grid.Column>
      </>
    )
  }

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email, } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            type="email"
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
      </Form>
    )
  }

  render() {
    const { editing, } = this.state
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            {editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {auth =>
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile