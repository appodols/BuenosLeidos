/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {fetchBookShelf } from '../actions/bookshelf_actions';
import {bookshelfShow} from '../reducers/selectors';


const msp = (state,ownProps) => {

  const defaultBook = {};
  current_bookShelf = bookshelfShow(ownProps.match.params.bookShelfId);
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
