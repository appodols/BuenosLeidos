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


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>{'E-mail'}
          <input type="text" onChange={this.update('e_mail')} value={this.state.e_mail}></input>
          </label>

          <label>Password
          <input type="password" onChange={this.update('password')} value={this.state.password}></input>
          </label>

          <button>Submit Information</button>
        </form>
      </div>

    );

  }



}

export default withRouter(SessionForm);

//<button onSubmit={()=>this.props.processForm(this.state)}>{this.props.formType}</button>
