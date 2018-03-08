/*jshint esversion: 6 */
import React from 'react';
import SessionForm from './session_form';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';


const landingPage = () => (

    <div className = 'landing'>

      <div className = 'header'>
        <h1 className ='BuenosLeidos'>Buenos Leidos</h1>
        <LoginFormContainer className = 'siginForm'></LoginFormContainer>
      </div>

      <h2> New here? Create a free account!</h2>
      <SignupFormContainer></SignupFormContainer>

  </div>
);

export default landingPage;


//design question...do we use existing form, and pass in current user
//
