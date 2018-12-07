import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

// class App extends Component {
//   render() {
//     return <h1>Hello World ! </h1>;
//   }
// }

const App = () => (
  <Provider store={store}>
    <h1>Hello World !</h1>
  </Provider>
);

export default App;
