import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

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
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
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

export default withRouter(ConnectedNavbar);
