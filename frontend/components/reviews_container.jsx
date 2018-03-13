/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Reviews from './reviews';
import {fetchReviews} from '../actions/review_actions';


const msp = (state,ownProps) => {
    return(
      {reviews: Object.values(state.reviews),
       bookId: ownProps.bookId,
       currentUser: state.currentUser
  });
};


const mdp = (dispatch) => ({
  fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
});

export default connect(msp, mdp)(Reviews);


// t.integer "user_id", null: false
// t.integer "book_id", null: false
// t.string "body"
// t.integer "rating", null: false
