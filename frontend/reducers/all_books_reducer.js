/*jshint esversion: 6 */
import React from 'react';
import { RECEIVE_BOOKS } from '../actions/book_actions';
import merge from 'lodash/merge';


export const allBooksReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKS:
      return merge({}, action.books);
    default:
      return state;
  }
};
