import React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../actions/userActions";

class PanelTopbar extends React.Component {

  logout = () => {
    this.props.dispatch(logoutUser())
  }

  render() {
    return(
      <div className="top-bar">
      <div className="logo">
        <h4>Twitchclips</h4>
      </div>
      <div className="user">
        <p onClick={this.logout}>{this.props.username}
          <i className="fas fa-sign-out-alt"></i>
        </p>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return { username: state.user.user.username } }

export default connect(mapStateToProps)(PanelTopbar);
