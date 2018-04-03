/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import LandingPage from './landing_page';
import demoLogin from '../actions/session_actions';

const msp = (state,ownProps) => {

};

const mdp = (dispatch, ownProps) => ({
  demoLogin:  dispatch(demoLogin())
});



export default connect(msp, mdp)(LandingPage);
