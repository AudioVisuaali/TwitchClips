import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Input } from "react-materialize";

import { logInUser } from "../actions/userActions"

class FormLogIn extends Component {

  login = (event) => {
    event.preventDefault();
    this.props.dispatch(logInUser(this.props.username, this.props.password))
  };

  render() {
    return (
      <div className="row">
        <form>
        <div className="row">
          <div className="input-field col s12">
            <Input
              name="loginUsername"
              value={this.props.username}
              onChange={this.props.handleChange}
              type="text"
              label="Username"
              s={12}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Input
              name="loginPassword"
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
              label="Password"
              s={12}
            />
          </div>
        </div>
        <div className="button-holder">
          <p>{this.props.error}</p>
          <Button waves='light' onClick={this.login}>Log in</Button>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { error: state.user.errors.loginError } }

export default connect(mapStateToProps)(FormLogIn);
