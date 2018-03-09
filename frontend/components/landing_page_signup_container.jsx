/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';


const msp = (state) => ({
  errors: state.errors.session,
  formType: 'Sign Up!',
  styleKey: 'landing'
});

const mdp = (dispatch,ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});


export default connect(msp,mdp)(SessionForm);
