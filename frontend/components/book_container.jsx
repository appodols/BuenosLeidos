/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Book from './book';
import {fetchBook} from '../actions/book_actions';
import {fetchReviews} from '../actions/review_actions';
import {averageRating, ownReview, bookShelfName } from '../reducers/selectors.js';
import {fetchBookShelves } from '../actions/bookshelf_actions';


const msp = (state,ownProps) => {

  const defaultBook = {title: "",author: "", id: ownProps.match.params.bookId};
    return({
    book: (state.books[ownProps.match.params.bookId] || defaultBook),
    reviews: Object.values(state.reviews),
    averageRating: averageRating(state),
    ownReview: ownReview(state),
    bookshelves: state.bookshelves,
    bookshelfName: bookShelfName(state)
  });
};


const mdp = (dispatch) => {
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId)),
    fetchBookShelves: () => dispatch(fetchBookShelves())
  });
};

export default connect(msp, mdp)(Book);
