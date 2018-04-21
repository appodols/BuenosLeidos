/*jshint esversion: 6 */
import { connect } from 'react-redux';
import bookshelfMenu from './bookshelf_menu';
import { bookShelfMenuInfo } from '../../reducers/selectors';
import { createBookShelf } from '../../actions/bookshelf_actions';

const msp = (state,ownProps) => {



  return({
    allBookShelves: bookShelfMenuInfo(state)[0],
    bookshelves: bookShelfMenuInfo(state).slice(1),
    currentUserID: state.session.currentUser.id
  });
};


const mdp = (dispatch) => {
  return({
    createBookShelf: (shelf) => dispatch(createBookShelf())
  });
};


export default connect (msp,mdp)(bookshelfMenu);
