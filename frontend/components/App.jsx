/*jshint esversion: 6 */
import { AuthRoute } from '../util/route_util';
import React from 'react';
// import { AuthRoute } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import BookContainer from './book_container';
import LandingPage from './landing_page';
import NavBar from './nav_bar.jsx';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
const App = () => (
  <div>


      <Switch>
        <Route exact path ='/' component={LandingPage}/>
        <Route component={NavBar}/>
    </Switch>

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

//note users can't log out when they get in
//  // <Route exact path ='/' component={NavBar}/>
