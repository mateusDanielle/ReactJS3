import React from 'react';
import { Provider } from 'react-redux';

import './store/config/reactotron';
import store from './store';

import TodoList from './TodoList';

console.tron.log('Hello World');
console.tron.warn('Erro fatal');

const App = () => (
  <Provider store={store}>
    <h1>Hello World !</h1>
    <TodoList />
  </Provider>
);

export default App;
