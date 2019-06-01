import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.2;

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
					<span className="title two">Staff</span>
					<div className="container two containercontainer">
						<div className="container two">
							<h2>Promotions</h2>
							Trial Moderator -> Junior Moderator<br/>
							Junior Moderator -> Moderator<br/>
							Moderator -> Senior Moderator<br/>
							Senior Moderator -> Admin<br/>
						</div>
						<div className="container two">
							<h2>The Team</h2>
							<Tag type="owner"/> Chromebook777<br/>
							<Tag type="mod"/> Minion3665<br/>
							<Tag type="tmod"/> vincentdistoer (Broken Arm)<br/>
						</div>
						<div className="container two">
							<h2>Applications</h2>
							<ul>
								<li>Staff Applications - Closed</li>
								<li>Server Media Team - Closed</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="page three">
					<iframe className="discordWidget" src="https://discordapp.com/widget?id=480959345601937410&theme=dark" allowTransparency="true" frameBorder="0"></iframe>
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
class Tag extends Component {
	constructor(props) {
		super(props);
		let tagTypes = {"owner":{"title":"Owner", "color":"#070000"}, "mod":{"title":"Moderator", "color":"#A84300"}, "tmod":{"title":"Trial-Moderator", "color":"#A84300"}}
		if (props.color && props.title) {
			this.state = {color: props.color, title: props.title};
		} else if (props.type && props.type in tagTypes) {
			this.state = {color: tagTypes[props.type].color, title: tagTypes[props.type].title};
		} else {
			this.state = {color: "#000000", title: "DEFAULT"};
		}
	}
	render() {
		return (
			<b style={{color: this.state.color}}>[{this.state.title}]</b>
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
