/*jshint esversion: 6 */
import * as ApiUtils from '../util/bookshelf_api_util';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';


export const createBookShelf = bookshelf => dispatch => (
  ApiUtils.createBookShelf(bookshelf).then(createdBookShelf=>(
    dispatch(receiveBookShelf(createdBookShelf))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);

export const fetchBookShelf = id => dispatch => (
  ApiUtils.fetchBookShelf(id).then(bookShelf=>(
    dispatch(receiveBookShelf(bookShelf))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);




export const fetchBookShelves = () => dispatch => (
  ApiUtils.fetchBookShelves().then(bookShelves=>(
    dispatch(receiveBookShelves(bookShelves))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);


export const deleteBookShelf = id => dispatch => (
  ApiUtils.deleteBookShelf(id).then(()=>(
    dispatch(removeBookShelf(id))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);


export const removeBookShelf = id => ({
  type: REMOVE_BOOKSHELF,
  bookShelfId: id
});



export const receiveError = error => ({
  type: RECEIVE_BOOKSHELF_ERRORS,
  error
});



export const receiveBookShelves = bookshelves => ({
  type:  RECEIVE_BOOKSHELVES,
  bookshelves
});



export const receiveBookShelf = bookshelf => ({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});
