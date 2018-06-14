import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Input } from "react-materialize";

import { createUser } from "../actions/userActions"

class FormRegister extends Component {

  hasUpperCase = (str) => {
    return (/[A-Z]/.test(str));
  }

  create = (event) => {
    event.preventDefault();

    if (this.props.username.length < 5) {
      this.props.dispatch({
        type: "REGISTER_ERROR_UPDATE",
        payload: "Username is not long enough"
      })
      return;
    }

    if (this.props.password.length < 5) {
      this.props.dispatch({
        type: "REGISTER_ERROR_UPDATE",
        payload: "Password is not long enough"
      })
      return;
    }

    if ( this.props.password !== this.props.passwordAgain ) {
      this.props.dispatch({
        type: "REGISTER_ERROR_UPDATE",
        payload: "Passwords do not match"
      })
      return;
    }

    if ( !(this.hasUpperCase(this.props.password)) ) {
      this.props.dispatch({
        type: "REGISTER_ERROR_UPDATE",
        payload: "Password requires one or more uppercase letters"
      })
      return;
    }

    this.props.dispatch(
      createUser(
        this.props.username,
        this.props.password
      )
    )
  }

  checkUsername = (event) => {
    this.props.handleChange(event)
    // Add username check here
  }


  render() {
    return (
      <div className="row">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <Input
                name="registerUsername"
                value={this.props.username}
                onChange={this.checkUsername}
                type="text"
                label="Username"
                s={12}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Input
                name="registerPassword"
                value={this.props.password}
                onChange={this.props.handleChange}
                type="password"
                label="Password"
                s={12}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Input
                name="registerPasswordAgain"
                value={this.props.passwordAgain}
                onChange={this.props.handleChange}
                type="password"
                label="Retype Password"
                s={12}
              />
            </div>
          </div>
          <div className="button-holder">
            <p>{this.props.error}</p>
            <Button waves='light' onClick={this.create}>Create account</Button>

          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { error: state.user.errors.registerError } }

export default connect(mapStateToProps)(FormRegister);
