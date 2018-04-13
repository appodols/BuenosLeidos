/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';
import { fetchBookShelves } from '../actions/bookshelf_actions';


const msp = (state) => {
  return({
    errors: state.errors.session,
    formType: 'Sign Up!',
    styleKey: 'normal'
 });
};

const mdp = (dispatch,ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  fetchBookShelves: () => dispatch(fetchBookShelves())
});



export default connect(msp,mdp)(SessionForm);
