
/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import BookRating from './book_rating';
import {deleteReview, updateReview, createReview} from '../actions/review_actions';
const msp = (state,ownProps) => {

  return({
    currentUser: state.session.currentUser,
    book: ownProps.book,
    rating: ownProps.book.rating,
    rating_id: ownProps.book.rating_id
  });

};

const mdp = (dispatch) => {
  return({
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))
  });
};


export default connect (msp,mdp)(BookRating);
