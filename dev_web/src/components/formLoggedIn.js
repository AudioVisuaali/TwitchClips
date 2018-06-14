import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../actions/userActions";

class Form extends Component {

  logout = () => {
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
        <div className="form-logged-in">
          <div className="forms">
            <div className="row">
              <div className="welcome">
                <h5>Welcome back</h5>
                <h5><span>{this.props.username}</span></h5>
              </div>
              <div className="button-holder">
                <a onClick={this.logout} className="waves-effect waves-light btn">Log out</a>
                <Link className="waves-effect waves-light btn" to="/panel">Move to panel</Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.user.username
  }
}

export default connect(mapStateToProps)(Form);
