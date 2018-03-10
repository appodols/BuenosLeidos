/*jshint esversion: 6 */
import React from 'react';
import { RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';


export const bookReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK:
      return merge({}, {[action.book.id]: action.book});
    default:
      return state;
  }
};
