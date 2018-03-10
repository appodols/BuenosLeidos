/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import {bookReducer} from './book_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  books: bookReducer
});


export default rootReducer;
