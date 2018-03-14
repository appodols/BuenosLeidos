/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Book from './book';
import {fetchBook} from '../actions/book_actions';
import {fetchReviews} from '../actions/review_actions';


const msp = (state,ownProps) => {
  const defaultBook = {title: "",author: ""};
    return({
    book: (state.books[ownProps.match.params.bookId] || defaultBook),
    reviews: Object.values(state.reviews)
  });
};


const mdp = (dispatch) => {
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
  });
};

export default connect(msp, mdp)(Book);
