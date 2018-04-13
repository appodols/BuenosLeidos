/*jshint esversion: 6 */
import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {fetchBookShelf } from '../actions/bookshelf_actions';


const msp = (state,ownProps) => {

  const defaultBook = {};

    return({
    
  });
};


const mdp = (dispatch) => {
  return({
    fetchBookShelf: (id) => dispatch(fetchBookShelf(id))
  });
};



export default connect(msp, mdp)(BookShelf);
