/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS, format } from '../actions/review_actions';
import { RECEIVE_BOOK } from '../actions/book_actions';


export const reviewReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK:
      return merge({}, action.book.reviews);
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({},state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};
