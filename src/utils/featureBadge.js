import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <div className="feature">
        <div className="emote">{this.props.icon}</div>
        {this.props.title}
        <div className="content">{this.props.description}</div>
      </div>
    );
  }
}

export default Badge;
