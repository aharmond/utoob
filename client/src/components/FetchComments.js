import React from 'react'
import { connect, } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Comments from './Comments'
import Comment from './Comment'
import { getComments, } from '../reducers/comments'
import { Loader, Segment, Dimmer, } from 'semantic-ui-react'

class FetchComments extends React.Component {
  state = { loaded: false, }

  componentDidMount() {
    this.props.dispatch(getComments(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {
    const { loaded, } = this.state;

    if (loaded) {
      return (
        <Switch>
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/comments/:id" component={Comment} />
        </Switch>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchComments);