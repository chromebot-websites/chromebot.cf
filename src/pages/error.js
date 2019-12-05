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
					<div className="textblock">Hey, that's an error {this.state.errorType}<br/>{this.state.errorMessage}</div>
					<Button important onClick={button => window.location.href = "/"}>Back To Home</Button>
					
				</div>
				<div className="page two variant2">
					<div className="textblock variant2">Website made by <a href="https://github.com/minion3665">@Minion3665</a> on github</div>
					<div className="textblock variant2">Discord server made by <a href="https://github.com/chromebook777">@Chromebook777</a> on github</div>
					<div className="textblock variant2">Minon's slave <a href="https://github.com/vilagamer999">@Vilagamer9999</a> On github</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Error;
