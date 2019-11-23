import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <div
        style={{
          width: "25%",
          backgroundImage: "linear-gradient(white, #ffffff55)",
          fontWeight: "bolder",
          fontSize: "3vw",
          margin: "2vw",
          textAlign: "center",
          borderRadius: "1vw",
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
