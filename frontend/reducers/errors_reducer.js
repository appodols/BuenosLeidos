/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import { sessionErrorsReducer} from './session_errors_reducer';
import {bookErrorReducer} from './book_error_reducer';
import {reviewErrorReducer} from './review_error_reducer';
import {bookShelfErrorReducer} from './bookshelf_error_reducer';
import {bookShelfOwnershipErrorReducer} from './bookshelf_ownership_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  book: bookErrorReducer,
  review: reviewErrorReducer,
  bookShelf: bookShelfErrorReducer,
  bookShelfOwnership: bookShelfOwnershipErrorReducer
});


export default errorsReducer;
