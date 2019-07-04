import React, { Component } from "react";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "grey",
      message: "getting the latest data",
      height: "14",
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
                message: "experiencing a Minor Outage",
                height: 14
              });
            } else if (member.status === "dnd") {
              this.setState({
                color: "#c65b29",
                message: "experiencing a Major Outage",
                height: 14
              });
            } else {
              this.setState({
                color: "#6CB83A",
                message: "Operational",
                height: 9
              });
            }
          }
        });
        if (!chromebotOn) {
          this.setState({ color: "red", message: "Offline", height: 9 });
        }
        setTimeout(() => {
          this.state.xmlhttp.open(
            "GET",
            "https://discordapp.com/api/guilds/" +
              this.props.serverId +
              "/widget.json?timestamp=" +
              new Date().getTime(),
            true
          ); //we appecnd the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
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
    this.xmlhttp.abort();
  }
  render() {
    return (
      <React.Fragment>
          <div
            className="statusBox"
            style={{
              backgroundColor: this.state.color,
              minHeight: this.state.height + "vw"
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

export default StatusPage;
