/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookRating from './book_rating';
import {deleteReview, updateReview, createReview} from '../actions/review_actions';
const msp = (state,ownProps) => {

  return({

  });

};

const mdp = (dispatch) => {
  return({
    deleteReview: (id) => dispatch(deleteReview(id)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))
  });
};


export default connect (msp,mdp)(BookRating);
