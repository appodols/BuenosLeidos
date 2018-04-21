/*jshint esversion: 6 */
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
// import { AuthRoute } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import BookContainer from './book_container';
import LandingPage from './landing_page';
import NavBarContainer from './nav_bar_container';
import NavBar from './nav_bar.jsx';
import ReviewFormContainer from './review_form_container';
import LandingPageContainer from './landing_page_container';
import BookShelfContainer from './bookshelf_container';
import AllBookShelvesContainer from './Bookshelf/all_bookshelves_container';

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
        <Route exact path ='/' component={LandingPageContainer}/>
        <ProtectedRoute component={NavBarContainer}/>
    </Switch>

    <Switch>
      <Route exact path ='/books/show/:bookId' component={BookContainer}/>
      <ProtectedRoute exact path = '/reviews/new' component={BookContainer}/>
      <ProtectedRoute path ='/bookshelves/all' component={AllBookShelvesContainer}/>
      <ProtectedRoute exact path = '/books/:bookId/review' component={ReviewFormContainer}/>
      <ProtectedRoute exact path = '/bookshelves/:bookShelfId' component={BookShelfContainer}/>
  </Switch>
  </div>
);

export default App;


// <Route path ='/bookshelves/all' component={AllBookShelves}/>
//  <Route exact path ='/' component={LandingPage}/>
//problem that landing page will be available everywhere

//note users can't log out when they get in
//  // <Route exact path ='/' component={NavBar}/>
//<AuthRoute exact path="/login" component={LoginFormContainer} />
//<AuthRoute exact path="/signup" component={SignupFormContainer} />

// <ProtectedRoute exact path = '/bookshelf/:bookShelfId' component={BookShelfContainer}/>
