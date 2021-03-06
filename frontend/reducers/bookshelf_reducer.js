/*jshint esversion: 6 */
import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES,  REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';


export const bookShelfReducer = (state = {} ,action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKSHELF:
    //you need to delete first
    let newState_ = [];
      if(state[action.bookshelf.id]){
         newState_ = merge({},state);
        delete newState_[action.bookshelf.id];
      }

      return merge({}, newState_, {[action.bookshelf.id]: action.bookshelf});
    case RECEIVE_BOOKSHELVES:
      return merge({}, action.bookshelves);
    case REMOVE_BOOKSHELF:
      let newState = merge({},state);
      delete newState[action.bookShelfId];
      return newState;
    default:
      return state;
  }
};
