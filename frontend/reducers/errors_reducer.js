/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import { sessionErrorsReducer} from './session_errors_reducer';
import {bookErrorReducer} from './book_error_reducer';


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  book: bookErrorReducer
});


export default errorsReducer;
