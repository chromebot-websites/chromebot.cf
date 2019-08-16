import React, { Component } from "react";
import Button from "./../utils/button.js";
import Status from "./../utils/status.js";
import PercentBar from "./../utils/percentBar.js";
import { MemberList } from "./../utils/members.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: null,
      sticky: null,
      allowStick: false
    };
  }
  stick() {
    if (!this.state.allowStick) {
      return;
    }
    console.log(window.pageYOffset);
    if (window.pageYOffset >= this.state.sticky) {
      console.log("Adding classes");
      this.state.logo.parentElement.childNodes.forEach(child => {
        child.classList.add("sticky");
      });
      document.body.classList.add("sticky");
      this.state.logo.parentElement.classList.add("stickyContainer");
    } else {
      console.log("Removing classes");
      this.state.logo.parentElement.childNodes.forEach(child => {
        child.classList.remove("sticky");
      });
      document.body.classList.remove("sticky");
      this.state.logo.parentElement.classList.remove("stickyContainer");
    }
  }
  componentDidUpdate() {
    this.stick();
  }
  componentDidMount() {
    this.setState({
      logo: document.getElementById("logo"),
      sticky: document.getElementById("logo").offsetTop,
      allowStick: true
    });
    window.onscroll = () => {
      this.stick();
    };
  }
	render() {
		return (
			<React.Fragment>
				<div>
					<img
            src="images/faviconRotate.GIF"
            className="logo"
            id="logo"
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
        <PercentBar serverId="582682665400926209" searchForMembers=[
					"499262934715727872", // Chromebot
					"555361766947815424", // Chromebot Canary
					"587060114318688256", // Chromebot ModMail
					"599743179608293398", // Chromebot manager
        	//"317731855317336067", // Minion3665 (for testing only)
      	]/>
      </React.Fragment>
    );
  }
}

export default HomePage;
