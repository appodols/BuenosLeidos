/*jshint esversion: 6 */
import { connect } from 'react-redux';
import bookshelfMenu from './bookshelf_menu';
import { bookShelfMenuInfo } from '../../reducers/selectors';


const msp = (state,ownProps) => {

  // bookShelfMenuInfo(state)[0];
  // let bookShelves =  bookShelfMenuInfo.slice(1);

  return({
    allBookShelves: bookShelfMenuInfo(state)[0],
    bookshelves: bookShelfMenuInfo(state).slice(1)
  });
};


// const mdp = (dispatch) => {
//   return({
//   });
// };


export default connect (msp,null)(bookshelfMenu);
