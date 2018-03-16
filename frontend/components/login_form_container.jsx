/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';


const msp = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: (ownProps.language === 'English' ? 'Sign In' : 'Iniciar sesión'),
    styleKey: 'normal',
    language: ownProps.language
 });
};



const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(msp,mdp)(SessionForm);
