import React, { Component } from 'react';
import { connect } from "react-redux";


import Form from "./form"
import FormLoggedIn from "./formLoggedIn"

class MainPage extends Component {

  render() {
    return (
      <div className="outer">
         <div className="inner">
          <div className="background">
            <video min-width="100%" min-height="100vh" autoPlay="autoplay" muted loop className="player">
              <source src="https://cdn.streamelements.com/assets/homepage/background-videos/front_page_clip_07.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
         </div>
         <div className="inner darken">
           <div className="content noselect">
            { this.props.user.loggedIn ? <FormLoggedIn /> : <Form />}
            </div>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps)(MainPage);
