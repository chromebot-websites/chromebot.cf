import React, { Component } from "react";
import Badge from "./../utils/featureBadge.js";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <b className="title right">Features</b>
      	<div className="centerContainer" style={{width: "100%"}}>
        	<Badge icon="🎲" title="Fun" description="Want to play dice? What about choosing an option from a set of them? Have fun with chromebot in your server"/>
					<Badge icon="🧠" title="Knowledge" description="Want to find out about a user? Just run the userinfo command and check out the information"/>
					<Badge icon="❓" title="Need help?" description="Need more information? We have a dedicated bot to help you use chromebot. Join the support server and run ?support"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Features;
