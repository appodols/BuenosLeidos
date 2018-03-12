/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';


export const reviewReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEWS:
      return merge({},state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({},state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};
