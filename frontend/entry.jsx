/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login} from './util/session_api_util';
// import configureStore from './store/store';



// document.addEventListener('DOMContentLoaded',()=>{
//   // const store = configureStore();
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store}></Root>,root);
//
// });


window.login = login;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BuenosLeídos</h1>, root);
});
