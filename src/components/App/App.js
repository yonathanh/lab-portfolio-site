import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MyNavBar from "../NavBar/MyNavBar";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Bio from "../Bio/Bio";
import ContactInfo from "../ContactInfo/ContactInfo";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/bio" component={Bio} />
          <Route path="/contactInfo" component={ContactInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
