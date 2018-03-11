/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login} from './actions/session_actions';
import configureStore from './store/store';
import {createBook} from './util/book_api_util';
import {fetchBook} from './util/book_api_util';
import {createReview} from './util/review_api_util';

window.login = login;


document.addEventListener('DOMContentLoaded',()=>{
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createBook = createBook;
  window.fetchBook = fetchBook;
  window.createReview = createReview;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}> We're doing stuff!</Root>,root);
});




// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   ReactDOM.render(<h1>Welcome to BuenosLeídos</h1>, root);
// });
