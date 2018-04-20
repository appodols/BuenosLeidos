/*jshint esversion: 6 */
import * as ApiUtils from '../util/bookshelf_ownership_api_util';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
import {receiveBookShelf, receiveError} from './bookshelf_actions';


export const createBookShelfOwnership = (bookShelfOwnership) => dispatch => (
  ApiUtils.createBookShelfOwnership(bookShelfOwnership).then(bookShelf=>(
    dispatch(receiveBookShelf(bookShelf))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);

export const removeBookShelfOwnership = (id) => dispatch => (
  ApiUtils.deleteBookshelfOwnership(id).then(bookShelf=>{
    return(dispatch(receiveBookShelf(bookShelf)));
  }, error => (
    dispatch(receiveError(error.responseJSON))
  ))
);



// export const receiveBookShelf = bookshelf => ({
//   type: RECEIVE_BOOKSHELF,
//   bookshelf
// });
//
//
//
// export const receiveError = error => ({
//   type: RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS,
//   error
// });
