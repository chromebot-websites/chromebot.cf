import React, { Component } from "react";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "grey",
      message: "getting the latest data"
    };
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
          <b className="title">{this.props.botname} is currently <span className="highlight">{this.state.message}</span></b>
        </div>
      </React.Fragment>
    );
  }
}

export default StatusPage;
