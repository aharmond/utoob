import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import UserView from './components/usercomponents/UserView';
import UserProfile from './components/usercomponents/UserProfile';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, } from "semantic-ui-react";
import VideoForm from './components/VideoForm';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Helmet bodyAttributes={{style: 'background-color : #f7f7f7f7'}} />
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/profile" component={UserProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/user/:id" component={UserView} />
          <ProtectedRoute exact path="/videos/new" component={VideoForm} />
          <ProtectedRoute exact path="/videos/:id/edit" component={VideoForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;