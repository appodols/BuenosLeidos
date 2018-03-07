/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';



const msp = (state) => ({
  currentUser: state.session.currentUser
});


const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(msp, mdp)(Greeting);
