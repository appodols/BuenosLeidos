/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import {bookReducer} from './book_reducer';
import {reviewReducer} from './review_reducer';
import {bookShelfReducer} from './bookshelf_reducer';
import {bookShelfOwnershipReducer} from './bookshelf_ownership_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  books: bookReducer,
  reviews: reviewReducer,
  bookshelves: bookShelfReducer
});

export default rootReducer;
