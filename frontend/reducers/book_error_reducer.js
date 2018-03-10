/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BOOK_ERRORS,  RECEIVE_BOOK } from '../actions/book_actions';


export const bookErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK_ERRORS:
        return action.error;
    case RECEIVE_BOOK:
      return [];
    default:
      return state;
  }

};
