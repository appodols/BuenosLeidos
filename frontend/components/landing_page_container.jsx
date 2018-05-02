/*jshint esversion: 6 */
import { connect } from 'react-redux';
import React from 'react';
import LandingPage from './landing_page';
import {demoLogin} from '../actions/session_actions';
import { fetchBookShelves } from '../actions/bookshelf_actions';
import { fetchBooks } from '../actions/book_actions';

const mdp = (dispatch, ownProps) => ({
  demo: () => dispatch(demoLogin()),
  fetchBookShelves: () => dispatch(fetchBookShelves()),
  fetchBooks: () => dispatch(fetchBooks())
});




export default connect(null, mdp)(LandingPage);
