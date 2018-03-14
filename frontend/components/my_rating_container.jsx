/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import MyRating from './my_rating';
import {deleteReview} from '../actions/review_actions';
import {createReview} from '../actions/review_actions';


const msp = (state) => {

  const reviewer_Ids = Object.values(state.reviews).map(review=>(
    review.user_id));
  let currentUser = state.session.currentUser;
  const hasReviewed = reviewer_Ids.includes(currentUser.id);

  const userReviewId = Object.values(state.reviews).filter(review=>(
    review.user_id === currentUser.id)).map(review=>(
      review.id))[0];


    return({
    currentUser: state.session.currentUser,
    reviews: Object.values(state.reviews),
    hasReviewed: hasReviewed,
    userReviewId: userReviewId
  });
};


const mdp = (dispatch,ownProps) => {
  return({
    deleteReview: (id) => dispatch(deleteReview(id)),
    createReview: (review) => dispatch(createReview(review))
  });
};


export default connect(msp,mdp)(MyRating);
