/*jshint esversion: 6 */
import * as ApiUtils from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const login = user => dispatch => {
  return(ApiUtils.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), (error) => (
    dispatch(receiveSessionErrors(error.responseJSON))
  ))
 );
};

export const signup = user => dispatch => {
  return(ApiUtils.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), (error) => (
    dispatch(receiveSessionErrors(error.responseJSON))
  ))
 );
};

export const demoLogin = () => dispatch => {
  return(ApiUtils.login({username: 'Demo@demo.com', password: 'demodemo'}).then(user => (
    dispatch(receiveCurrentUser(user))
  ), (error) => (
    dispatch(receiveSessionErrors(error.responseJSON))
  ))
 );
};









// export const signup = user => dispatch => (
//   ApiUtils.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), (error) => (
//     dispatch(receiveErrors(error.responseJSON))
//   ))
// );

export const logout = () => dispatch => {
  return (
    ApiUtils.logout().then(user => (
      dispatch(receiveCurrentUser(null))
    ))
  );
};


const receiveCurrentUser = currentUser => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
};


export const receiveSessionErrors = (error) => ({
  type: RECEIVE_SESSION_ERRORS,
  error: error
});





//we should run errors here, soon
