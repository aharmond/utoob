import React from 'react';
import { Header, Container, Grid, Segment, Divider, Image, Card} from 'semantic-ui-react';
import { Link, } from 'react-router-dom'
import Iframe from 'react-iframe'
import axios from 'axios';

class Home extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ product: res.data, });
    })
}

  render() {
    const { videos, } = this.state;
    return (
      <>
      <br />
      <Header as='h1'>All Videos</Header>
      <br/>
      <Container>

      
      <Iframe url="https://www.youtube.com/embed/Bn375-qFpdE"
          width="600px"
          height="370px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>


      <Card.Group itemsPerRow={4}>
        { videos.map( video =>
          <Card key={video.id}>
           
            <Iframe url={video.trailer}  
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  allowFullScreen/>/>
            <Card.Content>
              <Divider />
              <Card.Header>
                need to add correct route
              <Link to="/">{ video.name }</Link>
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </Container>
      </>
    )
  }
}

export default Home;
