import React, { Component } from "react";
import Navbar from "./../utils/navbar.js";
import Bots from "./bots.js";
import Features from "./features.js";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Bots />
        <Features />
      </React.Fragment>
    );
  }
}

export default HomePage;
