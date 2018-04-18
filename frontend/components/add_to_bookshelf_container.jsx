/*jshint esversion: 6 */
import { connect } from 'react-redux';
import addtoBookShelf from './add_to_bookshelf';
import {createBookShelfOwnership, removeBookShelfOwnership} from '../actions/bookshelf_ownership_actions';
import {bookShelfInfo } from '../reducers/selectors';

const msp = (state,ownProps) => {

  return({
    bookShelfInfo: bookShelfInfo(state),
    book: ownProps.book
  });

};

const mdp = (dispatch) => {
  return({
    createBookShelfOwnership: (ownership) => dispatch(createBookShelfOwnership(ownership)),
    removeBookShelfOwnership: (id) => dispatch(removeBookShelfOwnership(id))
  });
};


export default connect (msp,mdp)(addtoBookShelf);
