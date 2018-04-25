/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {allShelves} from '../../reducers/selectors';
import Home from './home';


const msp = (state,ownProps) => {

  return({
    allShelves: allShelves(state)
  });
};


export default connect (msp,null)(Home);
