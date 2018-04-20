/*jshint esversion: 6 */
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import React from 'react';
import {logout} from '../actions/session_actions';
import {fetchBookShelves} from '../actions/bookshelf_actions';


const msp = (state) => {
  return ({
    currentUser: state.session.currentUser
  });

};
const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchBookShelves: () => dispatch(fetchBookShelves())
});

export default connect(msp, mdp)(NavBar);


// const msp = (state) => ({
//   currentUser: state.session.currentUser
// });
//
// const mdp = (dispatch) => ({
//   logout: () => dispatch(logout())
// });
