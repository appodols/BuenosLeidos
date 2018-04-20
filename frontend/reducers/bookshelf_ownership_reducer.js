/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BOOKSHELF } from '../actions/bookshelf_ownership_actions';


export const bookShelfOwnershipReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKSHELF:
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});
    default:
      return state;
  }
};


//note this is not used
