/*jshint esversion: 6 */
import { connect } from 'react-redux';
import ShelfStatus from './shelf_status';
import {createBookShelfOwnership, removeBookShelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {bookShelfInfoStatus } from '../../reducers/selectors';

const msp = (state,ownProps) => {
  return({
    bookShelfInfo: bookShelfInfoStatus(ownProps.book),
    book: ownProps.book,
    name: ownProps.name
  });

};

const mdp = (dispatch) => {
  return({
    createBookShelfOwnership: (ownership) => dispatch(createBookShelfOwnership(ownership)),
    removeBookShelfOwnership: (id) => dispatch(removeBookShelfOwnership(id))
  });
};


export default connect (msp,mdp)(ShelfStatus);
