import React, { Component } from "react";
import Statuses from "./statuses.js";
import Button from "./../utils/button.js";
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
        <Statuses />
        <a id="bot-invite" />
        <b className="title">Invite the bots</b>
        <Button
          onClick={button => {
            window.location.href =
              "https://discordapp.com/oauth2/authorize?client_id=499262934715727872&permissions=2146958847&scope=bot";
            button.unpress();
          }}
        >
          Invite Chromebot
        </Button>
        <Button
          destructive
          onClick={button => {
            window.location.href =
              "https://discordapp.com/oauth2/authorize?client_id=555361766947815424&permissions=2146958847&scope=bot";
            button.unpress();
          }}
        >
          Invite Chromebot Canary (Chromebot Canary may be unstable)
        </Button>
      </React.Fragment>
    );
  }
}

export default Bots;
