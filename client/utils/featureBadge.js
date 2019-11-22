import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <div
        style={{
          width: "25%",
          backgroundImage: "linear-gradient(white, #ffffff33)",
          fontWeight: "bolder",
          fontSize: "3vw",
          marginLeft: "2vw",
          marginRight: "2vw",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "10vw" }}>{this.props.icon}</div>
        {this.props.title}
        <div style={{ fontSize: "1vw" }}>{this.props.description}</div>
      </div>
    );
  }
}

export default Badge;
