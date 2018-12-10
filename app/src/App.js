import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Routes from './routes';

// console.tron.log('Hello World');
// console.tron.warn('Erro fatal');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
