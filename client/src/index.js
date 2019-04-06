import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import { Provider } from 'react-redux';
import store from './store';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
