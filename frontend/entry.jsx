/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login} from './actions/session_actions';
import configureStore from './store/store';

window.login = login;


document.addEventListener('DOMContentLoaded',()=>{
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}></Root>,root);

});




// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   ReactDOM.render(<h1>Welcome to BuenosLeídos</h1>, root);
// });
