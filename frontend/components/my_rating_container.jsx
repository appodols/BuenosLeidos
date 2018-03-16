/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import MyRating from './my_rating';
import {deleteReview, updateReview, createReview} from '../actions/review_actions';
// import {createReview} from '../actions/review_actions';



const msp = (state) => {

  const reviewer_Ids = Object.values(state.reviews).map(review=>(
    review.user_id));
  let currentUser = state.session.currentUser;
  // const hasReviewed = reviewer_Ids.includes(currentUser.id);

  let userReviewId;
 if(currentUser){
   userReviewId =  Object.values(state.reviews).filter(review=>{
    return(
    review.user_id === currentUser.id);}).map(review=>(
      review.id))[0];

   }

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
    userReviewId: userReviewId,
    ownReview: state.reviews[userReviewId],
    book: Object.values(getState().books)[0]
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
