/*jshint esversion: 6 */
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview} from '../actions/review_actions';
import {ownReview} from '../reducers/selectors.js';


const msp = (state,ownProps) => {
    return(
      {
       review: ownReview(state),
       formType: 'update',
       book: state.books[ownProps.match.params.bookId],
       currentUserId: state.session.currentUser.id
  });
};


const mdp = (dispatch) => ({
  updateReview: (review) => dispatch(updateReview(review))
});

export default connect(msp, mdp)(ReviewForm);
