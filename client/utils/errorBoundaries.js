import React, { Component } from 'react'
import Button from './button.js';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null, eventId: null };
	}
	componentDidCatch(error, errorInfo) {
		this.setState({ error });
	}
	render() {
		if (this.state.error) {
			return ("Hi. I'm Minion3665. If you can see this then the website is dead. Properly dead. Please create a new issue at https://github.com/chromebook777-productions/chromebot.cf/issues with the title 'I got a supererror'. I am not going to link anywhere for fear of breaking stuff further, as if this error boundary breaks then I have nothing left. If you want to go back to the main page then go to https://chromebot.cf.Thanks, Minion3665/");
		} else {
			return (
				<WeakErrorBoundary>
					{this.props.children}
				</WeakErrorBoundary>
			);
		}
	}
}
class WeakErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null, eventId: null };
	}
	componentDidCatch(error, errorInfo) {
		this.setState({ error });
	}
	render() {
		if (this.state.error) {
			return (
				<React.Fragment>
					<div className="page one variant2">
						<div className="textblock">Hey, that's an Error.<br />While trying to fetch this resource on chromebot.cf there was a bug</div>
						<Button important onClick={(button) => window.location.href = "/"}>Back To Home</Button>
						<Button destructive onClick={(button) => window.location.href = "https://github.com/chromebook777-productions/chromebot.cf/issues"}>Report bug</Button>
					</div>
					<div className="page two variant2">
						<div className="textblock">Website made by <a href="https://github.com/minion3665">@Minion3665</a> on github</div>
						<div className="textblock">Discord server made by <a href="https://github.com/chromebook777">@Chromebook777</a> on github</div>
						<div className="textblock">vincentdistoer (Broken Arm)#0001 on discord had the initial idea of creating a website</div>
					</div>
				</React.Fragment>
			);
		} else {
			return this.props.children;
		}
	}
}

module.exports = ErrorBoundary;
