import React, { Component } from "react";
import Button from "./button.js";

class Navbar extends Component {
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
            onClick={button => {
              window.location.href = "https://discordapp.com/invite/77NM8VQ";
              button.unpress();
            }}
          >
            Join
          </Button>
          <Button
            onClick={button => {
              window.location.href = "#bot-invite";
              button.unpress();
            }}
          >
            Help and information
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
