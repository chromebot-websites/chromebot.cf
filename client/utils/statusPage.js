import React, { Component } from "react";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "grey",
      message: "getting the latest data",
      xmlhttp: new XMLHttpRequest(),
      timeoutId: null
    };
  }
  componentDidMount() {
    this.state.xmlhttp.onreadystatechange = () => {
      if (
        this.state.xmlhttp.readyState == 4 &&
        this.state.xmlhttp.status == 200
      ) {
        let chromebotOn = false;
        JSON.parse(this.state.xmlhttp.responseText).members.forEach(member => {
          if (member.id == this.props.botid) {
            chromebotOn = true;
            if (member.status === "idle") {
              this.setState({ color: "#AF7E00" });
              this.setState({ message: "experiencing a Minor Outage" });
            } else if (member.status === "dnd") {
              this.setState({ color: "#c65b29" });
              this.setState({ message: "experiencing a Major Outage" });
            } else {
              this.setState({ color: "#6CB83A" });
              this.setState({ message: "Operational" });
            }
          }
        });
        if (!chromebotOn) {
          this.setState({ color: "red" });
          this.setState({ message: "Offline" });
        }
        setTimeout(this.checkStatus, 5000);
      }
    };
    this.checkStatus();
  }
  checkStatus() {
    this.state.xmlhttp.open(
      "GET",
      "https://discordapp.com/api/guilds/" +
        this.props.serverId +
        "/widget.json?timestamp=" +
        new Date().getTime(),
      true
    ); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
    this.state.xmlhttp.send();
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.xmlhttp.abort();
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="page statusPage"
          style={{
            backgroundColor: this.state.color,
            backgroundImage:
              "linear-gradient(to bottom, " +
              this.props.prevColor +
              " 0%, " +
              this.state.color +
              " 10%, " +
              this.state.color +
              " 90%, " +
              this.props.nextColor +
              " 100%)"
          }}
        >
          <b className="title status">
            {this.props.botname} is currently{" "}
            <span className="highlight">{this.state.message}.</span>
          </b>
        </div>
      </React.Fragment>
    );
  }
}

export default StatusPage;
