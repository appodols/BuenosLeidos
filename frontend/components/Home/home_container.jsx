/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {allShelves, allBooks} from '../../reducers/selectors';
import Home from './home';


const msp = (state,ownProps) => {

  return({
    allShelves: allShelves(state),
    allBooks: allBooks(state)
  });
};


export default connect (msp,null)(Home);
