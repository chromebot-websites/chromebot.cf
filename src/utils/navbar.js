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
    console.log(window.pageYOffset);
    if (window.pageYOffset >= this.state.sticky) {
      if (!this.state.allowStick) {
        return;
      }
      this.state.logo.parentElement.childNodes.forEach(child => {
        child.classList.add("sticky");
      });
      Array.from(document.getElementsByClassName("link")).forEach(child => {
        child.classList.add("sticky");
      });
      document.body.classList.add("sticky");
      this.state.logo.parentElement.classList.add("stickyContainer");
    } else {
      if (!this.state.allowUnStick) {
        return;
      }
      this.state.logo.parentElement.childNodes.forEach(child => {
        child.classList.remove("sticky");
      });
      Array.from(document.getElementsByClassName("link")).forEach(child => {
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
      allowStick: true,
      allowUnStick: true,
    });
    window.onscroll = () => {
      this.stick();
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <video className="logo"
                 id="logo"
                 autoPlay
                 loop
                 muted
                 playsInline>
            <source src="videos/icon-rotate.webm.unreal" type="video/webm"/>
            <source src="videos/icon-rotate.mp4.unreal" type="video/mp4"/>
          </video>
          <Button
            important
            onClick={button => {
              window.location.href = "https://discordapp.com/invite/77NM8VQ";
              button.unpress();
            }}
          >
            Join The Server
          </Button>
          <Button
            onClick={button => {
              window.location.href = "#bot-invite";
              button.unpress();
            }}
          >
            Invite The Bots
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
