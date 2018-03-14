/*jshint esversion: 6 */
import * as ApiUtils from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


export const createReview = review => dispatch => (
  ApiUtils.createReview(review).then(createdReview=>(
    dispatch(receiveReview(createdReview))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);


export const deleteReview = id => dispatch => {
  return (
    ApiUtils.deleteReview(id).then(()=>(
      dispatch(removeReview(id))
    ), error => (
      dispatch(receiveError(error.responseJSON))
    ))
  );
};





export const fetchReview = id => dispatch => {
  return (
  ApiUtils.fetchReview(id).then(review => (
    dispatch(removeReview(id))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
 );
};


export const fetchReviews = bookId => dispatch => {
  return (
  ApiUtils.fetchReviews(bookId).then(reviews => (
    dispatch(receiveReviews(reviews))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
 );
};


export const updateReview = review => dispatch => (
  ApiUtils.updateReview(review).then(updatedReview=>(
    dispatch(receiveReview(updatedReview))
  ), error => (
    dispatch(receiveError(error.responseJSON))
  ))
);


export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});



export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const receiveError = error => ({
  type: RECEIVE_REVIEW_ERRORS,
  error
});

export const removeReview = id => ({
  type: REMOVE_REVIEW,
  reviewId: id
});
