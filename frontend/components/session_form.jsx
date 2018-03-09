/*jshint esversion: 6 */
import React from 'react';
import { withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {e_mail: '', password: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


 //  renderErrors(){
 //    return(
 //    //   <ul>
 //    //   {this.props.errors.map((error,i))}
 //    //   </ul>
 //    //
 //    // )
 //    //
 //   )
 // }








  render(){
    if(this.props.styleKey === 'normal'){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className= "logIn">
          <input type="text" className='username' onChange={this.update('e_mail')} placeholder= 'Username' value={this.state.e_mail}></input>
          <input type="password" className ='password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
          <input className='signinButton' type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  } else {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className= "logIn">
          <input type="text" className='l_username' onChange={this.update('e_mail')} placeholder= 'Username' value={this.state.e_mail}></input>
          <input type="password" className ='l_password' onChange={this.update('password')} placeholder='Password' value={this.state.password}></input>
          <input className='l_signinButton' type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  }


  }



}

export default withRouter(SessionForm);

//<button onSubmit={()=>this.props.processForm(this.state)}>{this.props.formType}</button>
//  <button className='signinButton'>{this.props.formType}</button>
