/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Book from './book';
import {fetchBook} from '../actions/book_actions';
import {fetchReviews} from '../actions/review_actions';
import {averageRating, ownReview } from '../reducers/selectors.js';


const msp = (state,ownProps) => {

  const defaultBook = {title: "",author: "", id: ownProps.match.params.bookId};
    return({
    book: (state.books[ownProps.match.params.bookId] || defaultBook),
    reviews: Object.values(state.reviews),
    averageRating: averageRating(state),
    ownReview: ownReview(state),
    bookshelves: state.bookshelves
  });
};


const mdp = (dispatch) => {
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
  });
};

export default connect(msp, mdp)(Book);
