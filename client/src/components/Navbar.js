import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Container, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'

const logo = 'https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1554685200&Signature=mCOAD2p5sijiSsM4HWpafP-cQs4TRHAouci4hZ3tLuXuA~Rs1Fqe8qYhPw3PvbOg2~vl0hr98Uy3ElhQY5~cO9wXDPzYtAR0lrlBZoFTBFmEkK6Qc8LuZfloXO8sT~b-bmR9xhm1v0mGDwIhJABaOqlq6xbKgBGyjfc-0CVJRXE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
const avatar = 'https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'

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
<<<<<<< HEAD
      <div>
        <Menu pointing secondary>
          <Menu.Menu>
            <Link to='/'>
              <Menu.Item
                name='home'
                id='home'
                active={this.props.location.pathname === '/'}
              >
                <Image src={logo} size='tiny' />
              </Menu.Item>
            </Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to='/profile'>
              <Menu.Item
                name='profile'
                id='profile'
                active={this.props.location.pathname === '/profile'}
              >
                <Image src={avatar} style={{ width: '1cm', height: '1cm' }} />
              </Menu.Item>
            </Link>
            {this.rightNavItems()}
          </Menu.Menu>
        </Menu>
      </div>
=======
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
>>>>>>> 808e1d4886071f870dee2c6eac5dd2b94c280d78
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
