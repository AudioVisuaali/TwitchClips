import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import MainPage from "./components/mainPage";
import Panel from "./components/panel";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchUser, fetchUserStart } from "./actions/userActions";

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUserStart())
    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route path="/panel" component={Panel}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {return {}}

export default connect(mapStateToProps)(App);
