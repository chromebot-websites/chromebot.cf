import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    let disabled = false;
    let type = "";
    let onClick = this.unpress;
    if (props.disabled) {
      disabled = true;
    }
    if (props.destructive) {
      type = "destructive";
    } else if (props.important) {
      type = "important";
    } else if (props.special) {
      type = "special";
    }
    if (typeof props.onClick === "function") {
      onClick = props.onClick;
    }
    this.state =
        {pressed : false, disabled : disabled, type : type, onClick : onClick};
  }
  unpress() { this.setState({pressed : false}); }
  render() {
    if (this.state.disabled) {
      return (<button className = "button disabled">{this.props.children}<
              /button>
			);
		} else if (!this.state.pressed) {
			return (
				<button onClick={() => { this.setState({ pressed: true }); this.state.onClick(this); }} className={"button " + this.state.type}>{this.props.children}</button>);
    } else {
                        return (
				<button className={"button pressed " + this.state.type}>{this.props.children}</button>
			);
		}
	}
}

export default Button;
