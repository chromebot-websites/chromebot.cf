import React, { Component } from "react";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.setState({color: "#c23b3b", barColor: "grey", percentage: 100, message: "Detecting the online bots...", xmlhttp: new XMLHttpRequest()});
    this.timeoutId = null;
  }
  componentDidMount() {
    this.state.xmlhttp.onreadystatechange = () => {
      if (
        this.state.xmlhttp.readyState === 4 &&
        this.state.xmlhttp.status === 200
      ) {
        let onlineMembers = 0;
        JSON.parse(this.state.xmlhttp.responseText).members.forEach(member => {
          if (this.props.searchForMembers.indexOf(member.id) >= 0) {
            onlineMembers++;
          }
        });
        let percentage =
          (onlineMembers / this.props.searchForMembers.length) * 100;
        if (percentage === 100) {
          this.setState({
            percentage: percentage,
            barColor: "#10690d",
            color: "#10690d",
            message: percentage.toString() + "% of the bot is online"
          });
        } else {
          this.setState({
            percentage: percentage,
            barColor: "#10690d",
            color: "#c23b3b",
            message: percentage.toString() + "% of the bots are online"
          });
        }
        this.timeoutId = setTimeout(() => {
          this.state.xmlhttp.open(
            "GET",
            "https://discordapp.com/api/guilds/" +
              this.props.serverId +
              "/widget.json?timestamp=" +
              new Date().getTime(),
            true
          ); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
          this.state.xmlhttp.send();
        }, 5000);
      }
    };
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
