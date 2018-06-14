import React from "react";
import { connect } from "react-redux";

class PanelClips extends React.Component {
  render() {
    return(
      <div className="">
        <div className="container">
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
          <p>dsaadsdasdasdasdasdas</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return { } }

export default connect(mapStateToProps)(PanelClips);
