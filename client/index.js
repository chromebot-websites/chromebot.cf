import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.1;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/join" render={() => {
							window.location.href = "https://discordapp.com/invite/8wMCjjT";
							return (
								<React.Fragment>
									<div className="textblock">We're redirecting you now...</div>
									<Button important onClick={(button) => window.location.href = "https://discordapp.com/invite/8wMCjjT"}>Not Being Redirected?</Button>
								</React.Fragment>
							);
						}} />
						<Route component={Error404} />
					</Switch>
				</Router>
			</ErrorBoundary>
		);
	}
}

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
			return (
				<React.Fragment>
					<div className="textblock">oops, we ran into an error</div>
					<Button important onClick={(button) => window.location.reload()}>Retry</Button>
					<Button onClick={(button) => window.location.href = "/"}>Back To Home</Button>
				</React.Fragment>
			);
		} else {
			return this.props.children;
		}
	}
}

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="page one">
					<img src="images/favicon512.png" className="logo" />
					<Button important onClick={(button) => window.location.href = "/join"}>Join</Button>
					<Button disabled>Help and information</Button>
				</div>
				<div className="page two">
					<div className="container two">
						<span className="title two">Staff</span>
						<div className="container two promotions">
							<span className="text two">Here in the chromebook777 productions server we have a fantastic and dedicated team of staff</span>
							<h2>Promotions</h2>
							Trial Moderator -> Junior Moderator<br/>
							Junior Moderator -> Moderator<br/>
							Moderator -> Senior Moderator<br/>
							Senior Moderator -> Admin<br/>
						</div>
					</div>
					<div className="container two team">
						<h2>The Team</h2>
					</div>
					<div className="container two applications">
						<h2>Applications</h2>
						<ul>
							<li>Staff Applications - Closed</li>
							<li>Server Media Team - Closed</li>
						</ul>
					</div>
				</div>
				<div className="page three">
					<iframe className="discordWidget" src="https://discordapp.com/widget?id=480959345601937410&theme=dark" allowtransparency="true" frameborder="0"></iframe>
					<div className="container three">
						<span className="title three">Online</span>
						<span className="text three">Our members come from around the world, so anytime you want to chat someone will be online</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class Error404 extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="textblock">Hey, that's a 404.<br />That resource was not found on chromebot.cf.</div>
				<Button important onClick={(button) => window.location.href = "/"}>Back To Home</Button>
			</React.Fragment>
		);
	}
}

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
		}
		if (typeof props.onClick === "function") {
			onClick = props.onClick;
		}
		this.state = { pressed: false, disabled: disabled, type: type, onClick: onClick };
	}
	unpress() {
		this.setState({pressed: false});
	}
	render() {
		if (this.state.disabled) {
			return (
				<button className="button disabled">{this.props.children}</button>
			);
		} else if (!this.state.pressed) {
			return (
				<button onClick={() => { this.setState({ pressed: true }); this.state.onClick(this); }} className={"button " + this.state.type}>{this.props.children}</button>
			);
		} else {
			return (
				<button className={"button pressed " + this.state.type}>{this.props.children}</button>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
