/*jshint esversion: 6 */
import React from 'react';
// import SessionForm from './session_form';
// import LoginFormContainer from './login_form_container';
// import LandingPageSignupContainer from './landing_page_signup_container';


const NavBar = ({currentUser, logout}) => {
    return (<header className="header">
      <nav className="header-nav">
        <section className="logo"> </section>

      <section className ='header-list'>

        <ul className="left-header">
          <li><a href="#">Home</a></li>
          <li><a href="#">My Books</a></li>
        </ul>

        <span onClick={logout} className= 'Sign-Out'> Sign Out</span>
      </section>


      </nav>
    </header>
  );
};
export default NavBar;
