import React, { Component } from "react";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "grey", message: "getting the latest data", timeoutId: null};
    this.xmlhttp = new XMLHttpRequest();
  }
  componentDidMount() {
    this.xmlhttp.onreadystatechange = () => {
      if (
        this.xmlhttp.readyState === 4 &&
        this.xmlhttp.status === 200
      ) {
        let members = JSON.parse(this.xmlhttp.responseText);
        if (!members) {
        } else if (members[this.props.botId]) {
          let member = members[this.props.botId];
          if (member.status === "offline") {
            this.setState({color: "red", message: "Offline", height: 9});
          } else if (member.status === "idle") {
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
            this.setState({
              color: "#6CB83A",
              message: "operational"
            });
          }
        } else {
          this.setState({color: "red", message: "not in server", height: 9});
        }
        setTimeout(() => {
          this.xmlhttp.open(
              "GET",
              "https://bartergame.cf/extras/bot/api/get/users?ts=" +
              new Date().getTime(),
              true
          ); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
          this.xmlhttp.send();
        }, 5000);
      }
    };
    this.xmlhttp.open(
      "GET",
      "https://bartergame.cf/extras/bot/api/get/users?ts=" +
        new Date().getTime(),
      true
    ); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
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
