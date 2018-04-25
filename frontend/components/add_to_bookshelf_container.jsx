/*jshint esversion: 6 */
import { connect } from 'react-redux';
import addtoBookShelf from './add_to_bookShelf';
import {createBookShelfOwnership, removeBookShelfOwnership} from '../actions/bookshelf_ownership_actions';
import {bookShelfInfo } from '../reducers/selectors';

const msp = (state,ownProps) => {
  return({
    bookShelfInfo: bookShelfInfo(state, ownProps.book),
    book: ownProps.book,
    styling: ownProps.styling
  });
};

const mdp = (dispatch) => {
  return({
    createBookShelfOwnership: (ownership) => dispatch(createBookShelfOwnership(ownership)),
    removeBookShelfOwnership: (id) => dispatch(removeBookShelfOwnership(id))
  });
};


export default connect (msp,mdp)(addtobookShelf);
