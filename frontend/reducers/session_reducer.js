/*jshint esversion: 6 */

import {RECEIVE_CURRENT_USER, } from '../actions/session_actions';
import merge from 'lodash/merge';


const defaultSessionState = {currentUser: null};


const sessionReducer = (state = defaultSessionState, action) => {
  debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};


export default sessionReducer;
