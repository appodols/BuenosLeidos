/*jshint esversion: 6 */
import connect from 'react-redux';
import NavBar from './nav_bar.jsx';
import React from 'react';


const msp = (state) => ({
  currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({
});


export default connect(msp,mdp)(NavBar);
