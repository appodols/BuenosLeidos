/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_SEARCH_ERRORS } from '../actions/search_actions';

export const searchErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_ERRORS:
        return action.error;
    default:
      return state;
  }
};
