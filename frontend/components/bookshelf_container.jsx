/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {fetchBookShelf } from '../actions/bookshelf_actions';
import {bookshelfShow, readStatus} from '../reducers/selectors';


const msp = (state,ownProps) => {

  const defaultBookShelf = {};
  let current_bookShelf = bookshelfShow(state, ownProps.match.params.bookShelfId);
  return({
      currentBookShelf: current_bookShelf
  });
};



const mdp = (dispatch) => {
  return({
    fetchBookShelf: (id) => dispatch(fetchBookShelf(id))
  });
};



export default connect(msp, mdp)(BookShelf);
