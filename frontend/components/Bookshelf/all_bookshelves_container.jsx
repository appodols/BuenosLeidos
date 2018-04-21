/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {allShelves} from '../../reducers/selectors'


const msp = (state,ownProps) => {

  return({
    allShelves: allshelves(state)
  });
};


// const mdp = (dispatch) => {
//   return({
//   });
// };

export default connect (msp,null)(bookshelfMenu);
