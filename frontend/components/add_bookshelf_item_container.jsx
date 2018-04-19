/*jshint esversion: 6 */
import { connect } from 'react-redux';
import addtoBookShelfItem from './add_bookshelf_item';
import {createBookShelfOwnership, removeBookShelfOwnership} from '../actions/bookshelf_ownership_actions';
import {bookShelfInfo } from '../reducers/selectors';

const msp = (state,ownProps) => {

  return({
    book: ownProps.book,
    name: ownProps.name,
    id: ownProps.id,
    button: ownProps.button
  });
};

const mdp = (dispatch) => {
  return({
    createBookShelfOwnership: (ownership) => dispatch(createBookShelfOwnership(ownership)),
    removeBookShelfOwnership: (id) => dispatch(removeBookShelfOwnership(id))
  });
};


export default connect (msp,mdp)(addtoBookShelfItem);


//bookShelfInfo: bookShelfInfo(state),
