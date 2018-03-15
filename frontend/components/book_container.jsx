/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Book from './book';
import {fetchBook} from '../actions/book_actions';
import {fetchReviews} from '../actions/review_actions';









const msp = (state,ownProps) => {

  const defaultBook = {title: "",author: ""};

    let average_rating = 0;
    if(Object.values(state.reviews).length > 0){
      average_rating = Number((Object.values(state.reviews).map(review=>
     (review.rating)).reduce((acc,el)=>(acc+el))/(Object.values(state.reviews).length)).toFixed(2));
   }

    return({
    book: (state.books[ownProps.match.params.bookId] || defaultBook),
    reviews: Object.values(state.reviews),
     averageRating: average_rating
  });
};


const mdp = (dispatch) => {
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
  });
};

export default connect(msp, mdp)(Book);
