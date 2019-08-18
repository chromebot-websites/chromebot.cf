import React, { Component } from "react";
import Status from "./../utils/status.js";
import PercentBar from "./../utils/percentBar.js";
import { MemberList } from "./../utils/members.js";

class Bots extends Component {
  render() {
    return (
      <React.Fragment>
        <b className="title right">Bots</b>
        <PercentBar
          serverId="480959345601937410"
          searchForMembers={[
            "499262934715727872", // Chromebot
            "555361766947815424", // Chromebot Canary
            "587060114318688256", // Chromebot ModMail
            "599743179608293398" // Chromebot manager
            //"317731855317336067", // Minion3665 (for testing only)
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Bots;
