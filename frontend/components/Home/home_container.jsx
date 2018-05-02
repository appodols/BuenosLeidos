/*jshint esversion: 6 */
import { connect } from 'react-redux';
import {allShelves, allBooks} from '../../reducers/selectors';
import {fetchBooks } from '../../actions/book_actions';
import Home from './home';


const msp = (state,ownProps) => {

  return({
    allShelves: allShelves(state),
    allBooks: allBooks(state)
  });
};

const mdp = (dispatch) => {
  return({
    fetchBooks: () => dispatch(fetchBooks())
  });
};



export default connect (msp,mdp)(Home);
