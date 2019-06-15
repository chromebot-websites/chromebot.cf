import React, { Component } from "react";
import Button from "./../utils/button.js";
import StatusPage from "./../utils/statusPage.js";
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
                    role: "miniwebman",
                    name: "bobolob54321",
                    specials: ["webowner", "excluded"]
                  },
                  {
                    role: "manager",
                    name: "Echo_Stream",
                    specials: ["admin"]
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
                    role: "tmod",
                    name: "1k23"
                  },
                  {
                    role: "tmod",
                    name: "Tbomb"
                  },
                  {
                    role: "tmod",
                    name: "Mexican country ball"
                  },
                  {
                    role: "jmod",
                    name: "Neptune05"
                  },
                  {
                    role: "jmod",
                    name: "Daniel_D_Diamond"
                  },
                  {
                    role: "miniwebdev",
                    name: "Elemental™"
                  },
                  {
                    role: "mod",
                    name: "Believe"
                  },
                  {
                    role: "miniwebdev",
                    name: "Vilagamer999",
                    specials: ["nostaff"]
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
        <StatusPage
          botname="Chromebot"
          prevColor="#5970C1"
          nextColor="#3776e8"
          botid="499262934715727872"
          serverid="480959345601937410"
        />
      </React.Fragment>
    );
  }
}

export default HomePage;
