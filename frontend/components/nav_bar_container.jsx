/*jshint esversion: 6 */
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import React from 'react';
import {logout} from '../actions/session_actions';


const msp = (state) => {
  return ({
    currentUser: state.session.currentUser
  });

};
const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(msp, mdp)(NavBar);


// const msp = (state) => ({
//   currentUser: state.session.currentUser
// });
//
// const mdp = (dispatch) => ({
//   logout: () => dispatch(logout())
// });
