import React from 'react';
import styled from 'styled-components'
import { Header, Container, Grid, Segment, Divider, Image, Card} from 'semantic-ui-react';
import { Link, } from 'react-router-dom'
import Iframe from 'react-iframe'
import axios from 'axios';

class Home extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get(`/api/videos/`)
    .then( res => {
      this.setState({ videos: res.data, });
    })
}

  render() {
    const { videos, } = this.state;
    return (
      <>
      <br />
      <Header as='h1'>All Videos</Header>
      <br/>
      <Grid >
      <Grid.Row columns={2}>
        <Grid.Column >
          <Container>
            <Card.Group itemsPerRow={4}>
              
                <StyledCard key='1'>
                  <Iframe url='https://www.youtube.com/embed/GdWvmzBvV_U' 
                        
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                  <Card.Content>

                    <Card.Header>
                    <Link to="/user/:id">Movie</Link>
                    </Card.Header>
                  </Card.Content>
                </StyledCard>
              
            </Card.Group>
          </Container>
        </Grid.Column>
        <Grid.Column>


          <StyledContainer >
            <Card.Group itemsPerRow={4}>
                
                { videos.map( video =>
                 
                <Card key={video.id}>
                  <Iframe url={video.trailer}  
                        
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                  <Card.Content>

                    <Card.Header>
                    <Link to="/user/:id">Movie</Link>
                    </Card.Header>
                  </Card.Content>
                </Card>
                )}
            </Card.Group>
          </StyledContainer >
        </Grid.Column>
        
        
        </Grid.Row>
        <Grid.Row>
        <Grid.Column >
          <Container >
            <Card.Group itemsPerRow={4}>
              { videos.map( video =>
                <Card key={video.id}>
                  <Iframe url={video.trailer}  
                        
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                  <Card.Content>

                    <Card.Header>
                    <Link to="/user/:id">{ video.title }</Link>
                    </Card.Header>
                  </Card.Content>
                </Card>
              )}
            </Card.Group>
          </Container>
        </Grid.Column>
          </Grid.Row>          
      
        </Grid>
      </>
    )
  }
}

const StyledCard = styled(Card)`
  height: 375px !important
  width: 500px !important
`

const StyledContainer = styled(Container)`
  display: flex !important
  align-items: flex-start !important
`


export default Home;
      
                
          

