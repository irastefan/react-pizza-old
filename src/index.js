import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './index.scss';
import './style.css';

import App from './App';

import store from './redux/store'
import {Provider} from 'react-redux'

console.log(store.getState())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);