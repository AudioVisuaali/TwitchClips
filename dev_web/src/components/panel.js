import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PanelTopbar from "./panelTopbar";
import PanelClips from "./panelClips";
import PanelClipsAdd from "./panelClipsAdd";

import fetchClips from "../actions/clipActions"

class Panel extends React.Component {
  state = {
    tabs: false,
    loading: false,
    fetched: false
  }
  componentDidMount() {

    this.props.dispatch(fetchClips())
  }

  changeTabs = (newState) => {
    this.setState({
      tabs: newState
    })
  }

  render() {
    if (!this.props.loggedIn && false) {
      return <Redirect to='/'/>;
    } else {
      return(
        <div className="panel">
          <PanelTopbar />
          <div className="clips_selector_container">
            <div className="clips_selector">
              <div className={this.state.tabs ? "preview_clips active" : "preview_clips"}>
                <h3 onClick={() => this.changeTabs(true)}>Clips</h3>
              </div>
              <div className={this.state.tabs ? "add_clip" : "add_clip active"}>
                <h3 onClick={() => this.changeTabs(false)}>Add clip</h3>
              </div>
            </div>
          </div>
          { this.state.tabs ? <PanelClips /> : <PanelClipsAdd /> }
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => { return { loggedIn: state.user.user.loggedIn } }

export default connect(mapStateToProps)(Panel);
