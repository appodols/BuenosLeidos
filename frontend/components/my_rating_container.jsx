/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import MyRating from './my_rating';
import {deleteReview, updateReview, createReview} from '../actions/review_actions';
import {has_reviewed, ownReview, currentUserReviewId} from '../reducers/selectors.js';
// import {createReview} from '../actions/review_actions';



const msp = (state) => {


  let currentUser = state.session.currentUser;

   let userReviewId = currentUserReviewId(state);


    const hasReviewed = (reviews, userReviewId) => {
      let reviewerIds = Object.values(reviews).map(review=>(
        review.user_id));
      const reviewStatus = reviewerIds.includes(userReviewId);
      return reviewStatus;
    };
    
    return({
    currentUser: state.session.currentUser,
    reviews: Object.values(state.reviews),
    hasReviewed: hasReviewed,
    has_reviewed: has_reviewed(state),
    userReviewId: userReviewId,
    ownReview: ownReview(state),
    book: Object.values(state.books)[0]
  });
};


const mdp = (dispatch,ownProps) => {
  return({
    deleteReview: (id) => dispatch(deleteReview(id)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))
  });
};


export default connect(msp,mdp)(MyRating);
