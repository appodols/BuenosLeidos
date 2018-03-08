/*jshint esversion: 6 */
import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => (
  <div>
    <header>
      <h1> BuenosLeidos </h1>
      <GreetingContainer/>
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
