import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Container, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
          <Menu.Item
            name='profile'
            id='profile'
            >
            <Image
              as={Link}
              to='/profile'
              src='https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
              size='mini'
              circular
              />
          </Menu.Item>
          <Menu.Item
            name='addvideo'
            id='addvideo'
          >
            <Button
              as={Link}
              to='/videos/new'
              color='red'
              content='Upload Video'
            />
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
            <Menu.Item
              id='login'
              name='login'
            >
              <Button
                as={Link}
                to='/login'
                color='red'
                content='Login'
              />
            </Menu.Item>
            <Menu.Item
              id='register'
              name='register'
            >
              <Button
                as={Link}
                to='/register'
                color='red'
                content='Register'
              />
            </Menu.Item>
        </Menu.Menu>
      )
    }
  }

  render() {
    
    return (
      <StyledMenu pointing secondary>
        <Container>
            <Menu.Item
              name='home'
              id='home'
              >
              <Image 
                as={Link} 
                to='/' 
                src='https://resources-live.sketch.cloud/files/c0514774-a772-457b-87d0-a07e56ce861e.png?Expires=1554685200&Signature=dgzVHCZMqmphUhbvqhSE2NTtV0TCjTI4L3FiDauCfRHlmOnrIm~VwJaXkFmuI-z9sp5kdMrBMT6~E0hMO1rnPMc~RsU23hMR9QW9M0M5MPdTJaICyLVy9PpIU7NshuBsjU6Nbc5uXHRCBzI8i4XNLQHVf53-3jnkZDvBmccKv4c_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
                size='small' 
                />
            </Menu.Item>
            { this.rightNavItems() }
        </Container>  
      </StyledMenu>
    )
  }
}


export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

const StyledMenu = styled(Menu)`
  background-color: white !important
  
`

export default withRouter(ConnectedNavbar);
