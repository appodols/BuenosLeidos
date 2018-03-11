/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS  } from '../actions/review_actions';


export const reviewErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEW_ERRORS:
        return action.error;
    case RECEIVE_REVIEW:
      return [];
    default:
      return state;
  }
};
