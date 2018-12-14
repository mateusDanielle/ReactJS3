import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
