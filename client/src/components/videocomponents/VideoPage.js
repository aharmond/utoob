import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import { Segment, Header, Divider, Image } from 'semantic-ui-react';

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
          width="100%"
          height="550px"
          id={id}
          display="initial"
          position="relative"
          allowFullScreen
        />
        <Segment>
          <Header content={title} />
          <Divider />
          <Header>
            <Image
              src='https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
              size='medium'
            />
            {name}
          </Header>
          {description}
        </Segment>
      </>
    )
  }
}

export default VideoPage;