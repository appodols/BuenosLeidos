/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS, RECEIVE_BOOKSHELF } from '../actions/bookshelf_ownership_actions';

export const bookShelfOwnershipErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS:
        return action.error;
    case RECEIVE_BOOKSHELF:
          return [];
    default:
      return state;
  }

};
