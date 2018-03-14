/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import MyRating from './my_rating';
import {deleteReview, createReview} from '../actions/review_actions';


const msp = (state) => {
    return({
    currentUser: state.session.currentUser,
    reviews: Object.values(state.reviews)
  });
};


const mdp = (dispatch,ownProps) => ({
  deleteReview: (id) => deleteReview(id),
  createReview: (review) => createReview(review)
});


export default connect(msp,mdp)(MyRating);
