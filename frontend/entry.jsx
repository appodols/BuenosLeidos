/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login} from './actions/session_actions';
import configureStore from './store/store';
import {createBook} from './util/book_api_util';
import {fetchBook} from './util/book_api_util';
import {createReview} from './util/review_api_util';
import {fetchReviews} from './util/review_api_util';
import {updateSearchQuery} from './util/search_api_util';

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
  window.fetchReviews = fetchReviews;
  window.updateSearchQuery = updateSearchQuery;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}> We're doing stuff!</Root>,root);
});


// const review = {user_id: 1, book_id: 4, body: "fabolous!", rating: 3};
// const review = {user_id: 1, book_id: 4, body: "o m g amazing!", rating: 4};
// const review = {user_id: 1, book_id: 4, body: "great!", rating: 5};


// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   ReactDOM.render(<h1>Welcome to BuenosLeídos</h1>, root);
// });
