/*jshint esversion: 6 */
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview} from '../actions/review_actions';



const msp = (state,ownProps) => {
    return(
      {
       book: state.books[ownProps.match.params.bookId],
       currentUserId: state.session.currentUser.id
  });
};


const mdp = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(msp, mdp)(ReviewForm);
