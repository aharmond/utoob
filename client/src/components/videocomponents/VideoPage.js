import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import { Segment, Header, Divider } from 'semantic-ui-react';

class VideoPage extends React.Component {
  state = { 
    video: { title: '', duration: '', genre: '', description: '', trailer: '', id: '', },
    user: { name: '' }
  } 

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
      .then( res => {
        this.setState( { video: res.data } )
      })
    axios.get(`/api/users/${this.props.match.params.user_id}`)
      .then( res => {
        this.setState( { user: res.data } )
      })
  }

  render() {
    const { title, duration, genre, description, trailer, id } = this.state.video
    const { name, } = this.state.user

    return (
      <>
        <Iframe
          url={trailer}
          width="850px"
          height="480px"
          id={id}
          display="initial"
          position="relative"
          allowFullScreen
        />
        <Segment>
          <Header content={title} />
          <Divider />
          <Header content={name} />
          {description}
        </Segment>
      </>
    )
  }
}

export default VideoPage;