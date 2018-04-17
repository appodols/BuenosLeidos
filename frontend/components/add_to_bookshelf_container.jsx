/*jshint esversion: 6 */
import { connect } from 'react-redux';
import addtoBookShelf from './add_to_bookshelf';
import {createBookShelfOwnership, removeBookShelfOwnership} from '../actions/bookshelf_ownership_actions';
import {bookShelfInfo} from '../reducers/selector';

const msp = (state,ownProps) => {

  return({
    bookShelfInfo: bookShelfInfo(state)
  });

};

const mdp = (dispatch) => {
  return({
    createReview: (ownership) => dispatch(createBookShelfOwnership(ownership)),
    updateReview: (id) => dispatch(removeBookShelfOwnership(id))
  });
};


export default connect (msp,mdp)(addtoBookShelf);
