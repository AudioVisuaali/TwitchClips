import React, { Component } from 'react';

import FormLogIn from "./formLogIn";
import FormRegister from "./formRegister";

export default class FormLoggedIn extends Component {
  state = {
    toggle: true,
    loginUsername: "",
    loginPassword: "",
    registerUsername: "",
    registerPassword: "",
    registerPasswordAgain: "",
    registerUsernameCheckTimestamp: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  updateTimeStamp = () => {
    const timeNow = new Date()
    this.setState({registerUsernameCheckTimestamp: timeNow})
  }

  toggle = (mode) => {
    this.setState({ toggle: mode })
  };

  render() {
    return (
        <div className="form">
          <div className={ this.state.toggle ? "bottons reg" : "bottons log" }>
            <div className="register reg" onClick={() => this.toggle(true)}>
              <h5>Login</h5>
            </div>
            <div className="login log" onClick={() => this.toggle(false)}>
              <h5>Register</h5>
            </div>
            <div className="bar">
            </div>
          </div>
          <div className="forms">
            {
              this.state.toggle ?
              <FormLogIn
                username={this.state.loginUsername}
                password={this.state.loginPassword}
                handleChange={this.handleChange}
              /> :
              <FormRegister
                username={this.state.registerUsername}
                usernameCheckTimestamp={this.state.registerUsernameCheckTimestamp}
                updateTimeStamp={this.updateTimeStamp}
                password={this.state.registerPassword}
                passwordAgain={this.state.registerPasswordAgain}
                handleChange={this.handleChange}
              />
            }
          </div>
        </div>
    );
  }
}
