import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import { Segment, Header, Divider, Container } from 'semantic-ui-react';
import Comments from '../Comments';
import styled from 'styled-components'
import { media, media2 } from '../../theme/media'

class VideoPage extends React.Component {
  state = {
    video: { title: '', duration: '', genre: '', description: '', trailer: '', id: '', },
    user: { name: '' }
  }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ video: res.data })
      })
    axios.get(`/api/users/${this.props.match.params.user_id}`)
      .then(res => {
        this.setState({ user: res.data })
      })
  }

  render() {
    const { title, duration, genre, description, trailer, id } = this.state.video
    const { name, } = this.state.user

    return (
      <>
          <SegmentStyle>
        <Iframe
          url={trailer}
          width="55em"
          height="30em"
          id={id}
          display="initial"
          position="relative"
          allowFullScreen
        />
        </SegmentStyle>
            <Segment>
              <Header content={title} />
              <Divider />
              <Header content={name} />
              {description}
            </Segment>
            <br />
            <Comments id={id} />
      </>
    )
  }
}

const SegmentStyle = styled(Container)`
  ${media.tablet`
    width: 45em !important
    height: 30em
  `},
`

export default VideoPage;