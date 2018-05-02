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
    this.props.processForm(this.state).then(()=>this.props.fetchBookShelves()).
    // then(()=>this.props.fetchBooks()).
    then(() => this.props.history.push(`/books/show/1`));
  }


  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }


    renderErrors() {
     return(
       <ul className= "session-errors">
         {this.props.errors.map((error, i) => (
         error))}
       </ul>
     );
   }

  render(){
    if(this.props.language === 'English') {
      if(this.props.styleKey === 'normal'){
      return(
        <div className = 'l_login'>
          <form onSubmit={this.handleSubmit} className= "logIn">
            <input type="text" className='username' onChange={this.update('e_mail')} placeholder= 'E-Mail Address' value={this.state.e_mail}></input>
            <input type="password" className ='password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
            <input className='signinButton' type="submit" value={this.props.formType}></input>
            {this.renderErrors()}
          </form>
        </div>
      );
    } else {
      return(
        <div className='l_signupForm'>
          <form onSubmit={this.handleSubmit} className= "l_signUp">
            <h3 id="identified"> New here? Create a free account!</h3>
            <input type="text" className ='l_name' onChange={this.update('name')} placeholder='Name' value={this.state.name}></input>
            <input type="text" className='l_username' onChange={this.update('e_mail')} placeholder= 'E-Mail Address' value={this.state.e_mail}></input>
            <input type="password" className ='l_password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
            <input className='l_signupButton' type="submit" value={this.props.formType}></input>
          </form>
        </div>
      );
    }

  } else {
      if(this.props.styleKey === 'normal'){
      return(
        <div className = 'l_login'>
          <form onSubmit={this.handleSubmit} className= "logIn">
            <input type="text" className='username' onChange={this.update('e_mail')} placeholder= 'Correo electrónico' value={this.state.e_mail}></input>
            <input type="password" className ='password' onChange={this.update('password')} placeholder='Contraseña' value={this.state.password}></input>
            <input className='signinButton' type="submit" value={this.props.formType}></input>
            {this.renderErrors()}
          </form>
        </div>
      );
    } else {
      return(
        <div className='l_signupForm'>
          <form onSubmit={this.handleSubmit} className= "l_signUp">
            <h3 id="identified"> Eres nuevo? Crea una cuenta gratis ya!</h3>
            <input type="text" className ='l_name' onChange={this.update('name')} placeholder='Nombre' value={this.state.name}></input>
            <input type="text" className='l_username' onChange={this.update('e_mail')} placeholder= 'Correo electrónico' value={this.state.e_mail}></input>
            <input type="password" className ='l_password' onChange={this.update('password')} placeholder='Contraseña' value={this.state.password}></input>
            <input className='crear-cuenta-button' type="submit" value={this.props.formType}></input>
          </form>
        </div>
      );
    }
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
