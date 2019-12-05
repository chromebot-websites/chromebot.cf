import Button from "./../utils/button.js";
import React, { Component } from "react";
import Badge from "./../utils/featureBadge.js";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
          <b className="title right">Features</b>
          <Badge
              icon="💭"
              title="Knowledge"
              description="Want to find out about a user? Just run the userinfo command and check out the information"
          />
          <Badge
              icon="🎲"
              title="Fun"
              description="Want to play dice? What about choosing an option from a set of them? Have fun with chromebot in your server"
          />
          <Badge
            icon="❓"
            title="Need help?"
            description="Need more information? We have a dedicated bot to help you use chromebot. Join the support server and run ?support"
          />
          <Badge
            icon="📈"
            title="Uptime"
            description="ChromeBot is almost always online to help your server. All issues are quickly reported to help you stay online even when we're down"
          />
          <Badge
            icon="⚙️"
            title="In Development"
            description="New features are always being added and issues are being fixed quickly. This ensures that you have a useful, working, bot in your server"
          />
          <Badge
            icon="🔌"
            title="Any Website Errors?"
            description="Found any errors in this website? Click the button below to report them:"
          />
          <Button destructive onClick={(button) => window.location.href = "https://github.com/chromebot-websites/chromebot.cf/issues"}>Click me to report a website error!</Button>
      </React.Fragment>
    );
  }
}

export default Features;
