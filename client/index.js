import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/error.js";
import HomePage from "./premade/home.js";
import ErrorBoundary from "./utils/errorBoundaries.js";
import Button from "./utils/button.js";

let buildNumber = 0.23;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/join" render={() => {
							window.location.href = "https://discordapp.com/invite/77NM8VQ";
							return (
								<React.Fragment>
									<div className="textblock">We're redirecting you now...</div>
									<Button important onClick={(button) => window.location.href = "https://discordapp.com/invite/77NM8VQ"}>Not Being Redirected?</Button>
								</React.Fragment>
							);
						}} />
						<Route path="/vince" component={OnlineOffline} />
						<Route render={() => {return(<Error code="404" description="The requested resource was not found on the chromebot support website"/>)}} />
					</Switch>
				</Router>
			</ErrorBoundary>
		);
	}
}



class OnlineOffline extends Component {
	constructor(props) {
		super(props);
		this.state = {vinceOn: "checking"};
	}
	componentDidMount() {
		let discordWidget = new XMLHttpRequest();
		discordWidget.onreadystatechange = () => {
			if (discordWidget.readyState == 4 && discordWidget.status == 200) {
				let vinceOn = false;
				JSON.parse(discordWidget.responseText).members.forEach((member) => {
					if (member.id == 317731855317336067) {
						vinceOn = true;
					}
				});
				this.setState({vinceOn: vinceOn});
			}
		};
		discordWidget.open("GET", "https://discordapp.com/api/guilds/480959345601937410/widget.json?timestamp=" + new Date().getTime(), true); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
		discordWidget.send();
	}
	render() {
		if (this.state.vinceOn === "checking") {
			return (
				<h1>Getting the latest data...</h1>
			);
		} else if (this.state.vinceOn) {
			return (
				<h1>Minion is ONLINE 🎉</h1>
			);
		} else {
			return (
				<h1>Minion is OFFLINE ❌</h1>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
