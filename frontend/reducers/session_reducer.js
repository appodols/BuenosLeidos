/*jshint esversion: 6 */

import {RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'loadash/merge';


const defaultSessionState = {currentUser: null};


const sessionReducer = (state = defaultSessionState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};


export default sessionReducer;
