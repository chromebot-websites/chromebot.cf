import React, { Component } from "react";
import SendXMLHTTP from "./../functions/sendXMLHTTP.js";

class Status extends Component {
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
          if (member.id == this.props.botId) {
            chromebotOn = true;
            if (member.status === "idle") {
              this.setState({
                color: "#AF7E00",
                message: "experiencing a Minor Outage"
              });
            } else if (member.status === "dnd") {
              this.setState({
                color: "#c65b29",
                message: "experiencing a Major Outage"
              });
            } else {
              this.setState({ color: "#6CB83A", message: "operational" });
            }
          }
        });
        if (!chromebotOn) {
          this.setState({ color: "red", message: "Offline", height: 9 });
        }
        console.log("sending...");
        this.timeoutId = SendXMLHTTP(
          "https://discordapp.com/api/guilds/" +
            this.props.serverId +
            "/widget.json",
          this.state.xmlhttp,
          5000
        );
      }
    };
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
          className="statusBox"
          style={{
            backgroundColor: this.state.color
          }}
        >
          <b className="title status">
            {this.props.botName} is currently{" "}
            <span className="highlight">{this.state.message}</span>.
          </b>
        </div>
      </React.Fragment>
    );
  }
}

export default Status;
