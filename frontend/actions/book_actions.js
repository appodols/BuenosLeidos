/*jshint esversion: 6 */
import * as ApiUtils from '../util/book_api_util';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';


export const createBook = book => dispatch => (
  ApiUtils.createBook(book).then(createdBook=>(
    dispatch(receiveBook(createdBook))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);



export const fetchBook = id => dispatch => {
  return (
  ApiUtils.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
 );
};

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});


export const receiveError = error => ({
  type: RECEIVE_BOOK_ERRORS,
  error
});
