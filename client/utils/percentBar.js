import React, { Component } from "react";
import SendXMLHTTP from "./../functions/sendXMLHTTP.js";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#c23b3b",
      barColor: "grey",
      percentage: 100,
      message: "Detecting the online bots...",
      xmlhttp: new XMLHttpRequest()
    };
    this.timeoutId = null;
  }
  componentDidMount() {
    this.state.xmlhttp.onreadystatechange = () => {
      if (
        this.state.xmlhttp.readyState == 4 &&
        this.state.xmlhttp.status == 200
      ) {
        let onlineMembers = 0;
        JSON.parse(this.state.xmlhttp.responseText).members.forEach(member => {
          if (this.props.searchForMembers.indexOf(member.id) >= 0) {
            onlineMembers++;
          }
        });
        let percentage =
          (onlineMembers / this.props.searchForMembers.length) * 100;
        if (percentage == 100) {
          this.setState({
            percentage: percentage,
            barColor: "#6cb83a",
            color: "#6cb83a",
            message: percentage.toString() + "% of the bot is online"
          });
        } else {
          this.setState({
            percentage: percentage,
            barColor: "#6cb83a",
            color: "#c23b3b",
            message: percentage.toString() + "% of the bots are online"
          });
        }
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
    this.state.xmlhttp.abort();
  }
  render() {
    return (
      <React.Fragment>
        <div id="percentbarOuter" style={{ backgroundColor: this.state.color }}>
          <div id="percentbarInnerText">{this.state.message}</div>
          <div
            id="percentbarInner"
            style={{
              width: this.state.percentage.toString() + "%",
              backgroundColor: this.state.barColor
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StatusPage;
