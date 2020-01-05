import React, { Component } from "react";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#c23b3b",
      barColor: "grey",
      percentage: 100,
      message: "Detecting the bots that are online..."
    };
    this.xmlhttp = new XMLHttpRequest();
    this.timeoutId = null;
  }
  componentDidMount() {
    this.xmlhttp.onreadystatechange = () => {
      if (this.xmlhttp.readyState === 4 && this.xmlhttp.status === 200) {
        let onlineMembers = 0;
        let members = JSON.parse(this.xmlhttp.responseText);
        this.props.searchForMembers.forEach(member => {
          if (members[member] && members[member].status !== "offline") {
            onlineMembers++;
          }
        });
        let percentage =
          Math.floor((onlineMembers / this.props.searchForMembers.length) * 100);
        if (percentage === 100) {
          this.setState({
            percentage: percentage,
            barColor: "#10690d",
            color: "#10690d",
            message: percentage.toString() + "% of the bots are online"
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
          this.xmlhttp.open(
            "GET",
              "https://bartergame.cf/extras/bot/api/get/users?ts=" +
              new Date().getTime(),
            true
          ); // we append the current timestamp to bypass caching, it's
          // hacky but it works. Please don't remove it unless you
          // have a better solution.
          this.xmlhttp.send();
        }, 5000);
      }
    };
    this.xmlhttp.open(
      "GET",
        "https://bartergame.cf/extras/bot/api/get/users?ts=" +
        new Date().getTime(),
      true
    ); // we append the current timestamp to bypass
    // caching, it's hacky but it works. Please don't
    // remove it unless you have a better solution.
    this.xmlhttp.send();
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
