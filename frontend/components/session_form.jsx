/*jshint esversion: 6 */
import React from 'react';
import { withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {e_mail: '', password: '', name: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }


  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }


    renderErrors() {
     return(
       <ul className= "errors">
         {this.props.errors.map((error, i) => (
         error))}
       </ul>
     );
   }

  render(){
    if(this.props.styleKey === 'normal'){
    return(
      <div className = 'l_login'>
         {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className= "logIn">
          <input type="text" className='username' onChange={this.update('e_mail')} placeholder= 'Username' value={this.state.e_mail}></input>
          <input type="password" className ='password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
          <input className='signinButton' type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  } else {
    return(
      <div className='l_signupForm'>
        <form onSubmit={this.handleSubmit} className= "l_signUp">
          <h3 id="identified"> New here? Create a free account!</h3>
          <input type="text" className ='l_name' onChange={this.update('name')} placeholder='Name' value={this.state.name}></input>
          <input type="text" className='l_username' onChange={this.update('e_mail')} placeholder= 'Username' value={this.state.e_mail}></input>
          <input type="password" className ='l_password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
          <input className='l_signupButton' type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  }


  }



}

export default withRouter(SessionForm);

//<button onSubmit={()=>this.props.processForm(this.state)}>{this.props.formType}</button>
//  <button className='signinButton'>{this.props.formType}</button>
//{this.renderErrors()}
//key={`error-${i}`}>
//  {error}
//<li key={i}>{error}</li>
