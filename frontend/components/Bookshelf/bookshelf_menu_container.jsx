/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {bookshelfMenu} from './bookshelf_menu';
import { bookShelfMenuInfo } from '../../reducers/selectors';



const msp = (state,ownProps) => {

  return({
    bookShelfMenuInfo: bookShelfMenuInfo(state)
  });
};


// const mdp = (dispatch) => {
//   return({
//   });
// };


export default connect (msp,null)(bookshelfMenu);
