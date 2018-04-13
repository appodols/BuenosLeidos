/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {fetchBookShelf } from '../actions/bookshelf_actions';
import {bookshelfShow} from '../reducers/selectors';


const msp = (state,ownProps) => {

  const defaultBook = {};
  current_bookshelf = bookshelfShow(ownProps.match.params.bookShelfId);
    return({

  });
};


const mdp = (dispatch) => {
  return({
    fetchBookShelf: (id) => dispatch(fetchBookShelf(id))
  });
};



export default connect(msp, mdp)(BookShelf);
