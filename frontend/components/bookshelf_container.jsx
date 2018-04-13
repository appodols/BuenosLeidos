/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookShelf from './bookshelf';


const msp = (state,ownProps) => {

  const defaultBook = {};

    return({

    // averageRating: averageRating(state),
    // ownReview: ownReview(state)
  });
};


const mdp = (dispatch) => {
  return({
    // fetchBook: (id) => dispatch(fetchBook(id)),
    // fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
  });
};



export default connect(msp, mdp)(BookShelf);
