import React, { Component } from 'react';
import Button from './button.js';
import Error from './../pages/error.js';

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
					<Error code="601" description="An unknown error occured. Who knows what this one means..."/>
				</React.Fragment>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
export WeakErrorBoundary;
