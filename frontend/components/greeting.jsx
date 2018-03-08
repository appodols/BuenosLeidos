/*jshint esversion: 6 */

import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from './landing_page';


const session_links = () =>(
  <div>
    <LandingPage></LandingPage>
  </div>
);

//consider using break here   <br></br>
//<Link to="/signup">Sign Up</Link>
// <br></br>
// <br></br>
// <Link to="/login">Login</Link>
  // <SessionForm></SessionForm>
const personalGreeting = (currentUser, logout) => (
  <div>
    <h1>Welcome{currentUser.e_mail}</h1>
    <button onClick={logout}> Logout</button>
  </div>
);


const Greeting = ({currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : session_links()
);


export default Greeting;
