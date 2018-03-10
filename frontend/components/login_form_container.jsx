/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';


const msp = state => {
  return({
    errors: state.errors.session,
    formType: 'Sign In!',
    styleKey: 'normal'
 });
};



const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(msp,mdp)(SessionForm);
