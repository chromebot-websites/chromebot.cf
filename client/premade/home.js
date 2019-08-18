import React, { Component } from "react";
import Navbar from "./../utils/navbar.js";
import Bots from "./bots.js";
import { MemberList } from "./../utils/members.js";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Bots />
      </React.Fragment>
    );
  }
}

export default HomePage;
