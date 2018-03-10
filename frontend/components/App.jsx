/*jshint esversion: 6 */
import { AuthRoute } from '../util/route_util';
import React from 'react';
// import { AuthRoute } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import BookContainer from './book_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
const App = () => (
  <div>
    <GreetingContainer></GreetingContainer>
    <Switch>
      <Route exact path ='/books/show/:bookId' component={BookContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </Switch>
  </div>
);

export default App;

//  <Route exact path ='/' component={LandingPage}/>
//problem that landing page will be available everywhere
