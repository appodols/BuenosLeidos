/*jshint esversion: 6 */
import React from 'react';
import { withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
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
      <form onClick={this.handleSubmit}>
        <input type="text" onChange={this.update('username')} value={this.state.username}></input>
        <input type="password" onChange={this.update('password')} value={this.state.password}></input>
      </form>
      </div>

    );

  }



}

export default withRouter(SessionForm);
