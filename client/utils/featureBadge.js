import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <div
        style={{
          width: "25%",
          backgroundImage: "linear-gradient(white, #ffffff55)",
          fontWeight: "bolder",
          fontSize: "35px",
          margin: "2vw",
          textAlign: "center",
          borderRadius: "1vw",
          minHeight: "30vw",
          padding: "1vw"
        }}
      >
        <div style={{ fontSize: "50px" }}>{this.props.icon}</div>
        {this.props.title}
        <div style={{ fontSize: "20px" }}>{this.props.description}</div>
      </div>
    );
  }
}

export default Badge;
