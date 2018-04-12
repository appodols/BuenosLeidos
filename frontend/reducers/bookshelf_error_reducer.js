/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BOOKSHELF_ERRORS } from '../actions/bookshelf_actions';

export const bookShelfErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKSHELF_ERRORS:
        return action.error;
    default:
      return state;
  }

};
