/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Review from './review';
import {fetchReview} from '../actions/review_actions';


const msp = (state,ownProps) => {
  const defaultBook = {title: "",author: ""};
    return({
    review: state.reviews[ownProps.match.params.reviewId] || defaultBook
  });
};


const mdp = (dispatch) => ({
  fetchReview: (id) => dispatch(fetchReview(id))
});

export default connect(msp, mdp)(Book);
