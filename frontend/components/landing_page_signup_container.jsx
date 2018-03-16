/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';


const msp = (state, ownProps) => {
    return({
    errors: state.errors.session,
    formType: (ownProps.language === 'English' ? 'Sign Up' : 'Crear Cuenta'),
    styleKey: 'landing',
    language: ownProps.language
   });
};

const mdp = (dispatch,ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});


export default connect(msp,mdp)(SessionForm);
