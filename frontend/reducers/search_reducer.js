/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_SEARCH_QUERY } from '../actions/search_actions';


export const searchReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_QUERY:
      return merge({}, action.searchQuery);
    default:
      return state;
  }
};
