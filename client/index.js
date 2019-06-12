import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/error.js";
import ErrorBoundary from "./utils/errorBoundaries.js";
import Button from "./utils/button.js";
import MemberList, { Tag } from "./utils/members.js";

let buildNumber = 0.23;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<SuperErrorBoundary>
				<ErrorBoundary>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
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
			</SuperErrorBoundary>
		);
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
							<MemberList members={[
								{
									role: "founder",
									name: "chromebook777",
									specials: [
										"admin",
										"support"
									]
								},
								{
									role: "owner",
									name: "DaSavMode1",
									specials: [
										"admin"
									]
								},
								{
									role: "owner",
									name: "Lolinator02",
									specials: [
										"admin"
									]
								},
								{
									role: "manager",
									name: "Cameron",
									specials: [
										"admin"
									]
								},
								{
									role: "miniwebman",
									name: "bobolob54321",
									specials: [
										"webowner",
										"excluded"
									]
								},
								{
									role: "manager",
									name: "Echo_Stream",
									specials: [
										"admin"
									]
								},
								{
									role: "headdev",
									name: "IronCladRelic",
									specials: [
										"admin",
										"support"
									]
								},
								{
									role: "headbotdev",
									name: "EEKIM10_YT",
									specials: [
										"admin"
									]
								},
								{
									role: "headwebdev",
									name: "vincentdistoer (Broken Arm)",
									specials: [
										"admin",
										"support",
										"media",
										"weebly"
									]
								},
								{
									role: "mod",
									name: "Chandler_Leroy"
								},
								{
									role: "mod",
									name: "leothelion9"
								},
								{
									role: "mod",
									name: "Dolphin Song"
								},
								{
									role: "miniheadwebdev",
									name: "Minion3665",
									specials: [
										"webowner"
									]
								},
								{
									role: "tmod",
									name: "1k23"
								},
								{
									role: "tmod",
									name: "Tbomb"
								},
								{
									role: "tmod",
									name: "Mexican country ball"
								},
								{
									role: "jmod",
									name: "Neptune05"
								},
								{
									role: "jmod",
									name: "Daniel_D_Diamond"
								},
								{
									role: "miniwebdev",
									name: "Elemental™"
								},
								{
									role: "mod",
									name: "Believe"
								}
							]}/>
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
