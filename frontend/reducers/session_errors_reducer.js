/*jshint esversion: 6 */
import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS} from '../actions/session_actions';



  export const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_SESSION_ERRORS:
        return action.errors.responseJSON;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
    }
  };
