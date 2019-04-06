import React from 'react';
import axios from 'axios';
import { Header, Segment } from 'semantic-ui-react';

class UserView extends React.Component {
  state = { user: {}, userVideos: [], }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/users/${id}`)
      .then( res => {
        this.setState({ user: res.data })
      })
    axios.get(`/api/users/${id}/videos`)
      .then( res => {
        this.setState({ userVideos: res.data})
      })
  }

  render() {
    const { email } = this.state.user
    const { userVideos } = this.state 

    return(
      <>
        <Header content={email} />
        <Segment>
          { userVideos.map( v => {
            return (
              <div key={v.id}>
                {v.title}
              </div>
            )
          }) }
        </Segment>
      </>
    )
  }
}

export default UserView;