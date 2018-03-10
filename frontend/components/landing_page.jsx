/*jshint esversion: 6 */
import React from 'react';
import SessionForm from './session_form';
import LoginFormContainer from './login_form_container';
import LandingPageSignupContainer from './landing_page_signup_container';


const landingPage = () => (

    <div className = 'landing'>

      <div className = 'header'>
        <h1 className ='BuenosLeidos'>Buenos Leidos</h1>
        <LoginFormContainer className = 'siginForm'></LoginFormContainer>
      </div>
      <section className = 'landing-main-lower-half'>
        <h1 id="cta"> Meet Your Next Favorite Book</h1>
        <LandingPageSignupContainer></LandingPageSignupContainer>
     </section>
  </div>
);

export default landingPage;


//design question...do we use existing form, and pass in current user
//  <h1 id='landing_call_to_action'> Meet Your Next Favorite Book</h1>
//  <h1 id="cta"> Meet Your Next Favorite Book</h1>
