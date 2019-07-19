import React, { Component } from "react";
import Button from "./../utils/button.js";
import Status from "./../utils/status.js";
import { MemberList } from "./../utils/members.js";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page one">
          <img
            src="images/faviconRotate.GIF"
            className="logo"
            alt="the chromebot logo"
          />
          <Button
            important
            onClick={button => (window.location.href = "/join")}
          >
            Join
          </Button>
          <Button disabled>Help and information</Button>
        </div>
        <div className="page two">
          <span className="title two">Staff</span>
          <div className="container two containercontainer">
            <div className="container two">
              <h2>Promotions</h2>
              Trial Moderator -> Junior Moderator
              <br />
              Junior Moderator -> Moderator
              <br />
              Moderator -> Senior Moderator
              <br />
              Senior Moderator -> Admin
              <br />
            </div>
            <div className="container two">
              <h2>The Team</h2>
              <MemberList
                members={[
                  {
                    role: "founder",
                    name: "chromebook777",
                    specials: ["admin", "support"]
                  },
                  {
                    role: "owner",
                    name: "DaSavMode1",
                    specials: ["admin"]
                  },
                  {
                    role: "owner",
                    name: "Lolinator02",
                    specials: ["admin"]
                  },
                  {
                    role: "manager",
                    name: "Cameron",
                    specials: ["admin"]
                  },
                  {
                    role: "manager",
                    name: "2018 Chevrolet_Silverado_Z71",
                    specials: ["admin"]
                  },
                  {
                    role: "miniwebman",
                    name: "bobolob54321",
                    specials: ["webowner", "excluded"]
                  },
                  {
                    role: "headdev",
                    name: "IronCladRelic",
                    specials: ["admin", "support"]
                  },
                  {
                    role: "headbotdev",
                    name: "EEKIM10_YT",
                    specials: ["admin"]
                  },
                  {
                    role: "headwebdev",
                    name: "vincentdistoer (Broken Arm)",
                    specials: ["admin", "support", "media", "weebly"]
                  },
                  {
                    role: "mod",
                    name: "Chandler_Leroy"
                  },
                  {
                    role: "mod",
                    name: "leothelion9"
                  },
                  {
                    role: "mod",
                    name: "Dolphin Song"
                  },
                  {
                    role: "miniheadwebdev",
                    name: "Minion3665",
                    specials: ["webowner"]
                  },
                  {
                    role: "jmod",
                    name: "Daniel_D_Diamond"
                  },
                  {
                    role: "jmod",
                    name: "Elemental™"
                  },
                  {
                    role: "jmod",
                    name: "Neptune05"
                  },
                  {
                    role: "jmod",
                    name: "therealtbomb"
                  }
                ]}
              />
            </div>
            <div className="container two">
              <h2>Applications</h2>
              <ul>
                <li>Staff Applications - Closed</li>
                <li>Server Media Team - Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page three">
          <iframe
            allowtransparency="true"
            frameborder="0"
            className="discordWidget"
            src="https://discordapp.com/widget?id=480959345601937410&theme=dark"
          />
          <div className="container three">
            <span className="title three">Online</span>
            <span className="text three">
              Our members come from around the world, so anytime you want to
              chat someone will be online
            </span>
          </div>
        </div>
        <div className="page four">
          <Status
            botName="Chromebot"
            prevColor="#5970C1"
            color="#000080"
            nextColor="#D9D900"
            botId="499262934715727872"
            serverId="480959345601937410"
          />
          <Status
            botName="Chromebot Canary"
            prevColor="#D9D900"
            color="#8C8C00"
            nextColor="#8C8C00"
            botId="555361766947815424"
            serverId="480959345601937410"
          />
          <Status
            botName="Chromebot ModMail"
            prevColor="#D9D900"
            color="#8C8C00"
            nextColor="#8C8C00"
            botId="587060114318688256"
            serverId="480959345601937410"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
