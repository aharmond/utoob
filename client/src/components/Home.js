import React from 'react';
import { Header, } from 'semantic-ui-react';
import Comments from './Comments';

const Home = () => (
  <div>
  <Header as="h3" textAlign="center">Devise Auth App</Header>
  <br />
  <Comments />
  </div>
)

export default Home;
