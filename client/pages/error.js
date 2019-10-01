import React, { Component } from 'react';
import Button from './../utils/button.js';

class Error extends Component {
	constructor (props) {
		super(props);
		this.state = {errorType: props.code, errorMessage: props.description};
	}
	render() {
		return (
			<React.Fragment>
				<div className="page one variant2">
					<div className="textblock">Hey, that's an error {this.state.errorType}.<br />{this.state.errorMessage}.</div>
					<Button important onClick={(button) => window.location.href = "/"}>Back To Home</Button>
					<Button destructive onClick={(button) => window.location.href = "https://github.com/chromebook777-productions/chromebot.cf/issues"}>Report a bug if you believe this is in issue</Button>
				</div>
				<div className="page two variant2">
					<div className="textblock variant2">Website made by <a href="https://github.com/minion3665">@Minion3665</a> on github</div>
					<div className="textblock variant2">Discord server made by <a href="https://github.com/chromebook777">@Chromebook777</a> on github</div>
					<div className="textblock variant2">vincentdistoer (Broken Arm)#0001 on discord had the initial idea of creating a website</div>
					<div className="textblock variant2">General HTML improvements and contributions by <a href="https://github.com/Vilagamer999">@Vilagamer999</a> on github</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Error;
