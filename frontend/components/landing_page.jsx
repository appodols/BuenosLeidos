/*jshint esversion: 6 */
import React from 'react';
import SessionForm from './session_form';
import LoginFormContainer from './login_form_container';
import LandingPageSignupContainer from './landing_page_signup_container';


class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {language: 'English', buttonName: 'Español'};
    this.updateButton = this.updateButton.bind(this);

  }


  updateButton(e){
    if(this.state.language === 'English'){
      this.setState({language: 'Spanish', buttonName: 'English'});
    } else {
        this.setState({language: 'English', buttonName: 'Español'});
    }
  }



  render(){
    return(
        <div className = 'landing'>

          <div className = 'header'>
            <h1 className ='BuenosLeidos'>Buenos Leidos</h1>
            <LoginFormContainer language= {this.state.language} className = 'siginForm'></LoginFormContainer>
          </div>


          <section className = 'landing-main-lower-half'>


              {this.state.language === 'English' ?
              <div className='left-lower-half'>
                <h1 id="cta"> Meet Your Next Favorite Book</h1>
                <button onClick={this.updateButton} className='language-button'>{this.state.buttonName}</button>
               </div>:
              <div className='left-lower-half'>
                <h1 id="cta-espanol"> Conoce tu próximo libro favorito</h1>
                <button onClick={this.updateButton} className='language-button-espanol'>{this.state.buttonName}</button>
            </div>}

            <div className='demoLogin'>

            </div>


            <LandingPageSignupContainer language= {this.state.language}></LandingPageSignupContainer>
         </section>
      </div>
    );
  }

}

export default LandingPage;


//design question...do we use existing form, and pass in current user
//  <h1 id='landing_call_to_action'> Meet Your Next Favorite Book</h1>
//  <h1 id="cta"> Meet Your Next Favorite Book</h1>

// <h1 className ='BuenosLeidos'>Buenos Leidos</h1>
// <LoginFormContainer className = 'siginForm'></LoginFormContainer>
