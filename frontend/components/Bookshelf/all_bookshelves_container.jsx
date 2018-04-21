/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {allShelves} from '../../reducers/selectors';
import allBookShelves from './all_bookshelves';


const msp = (state,ownProps) => {

  return({
    allShelves: allShelves(state)
  });
};


// const mdp = (dispatch) => {
//   return({
//   });
// };

export default connect (msp,null)(allBookShelves);
