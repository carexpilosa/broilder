import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import Flex from './components/Flex';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/styles.css';


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Test />
      <hr />
      {
        //<Flex />
      }
    </div>
  </Provider>,
  document.getElementById('app')
);





