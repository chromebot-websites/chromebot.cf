import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.23;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/join" render={() => {
							window.location.href = "https://discordapp.com/invite/QZaHasb";
							return (
								<React.Fragment>
									<div className="textblock">We're redirecting you now...</div>
									<Button important onClick={(button) => window.location.href = "https://discordapp.com/invite/QZaHasb"}>Not Being Redirected?</Button>
								</React.Fragment>
							);
						}} />
						<Route path="/vince" component={OnlineOffline} />
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
									role: "admin",
									name: "DE fada",
									specials: [
										"admin",
										"support"
									]
								},
								{
									role: "admin",
									name: "Temporaily back (Echo_Stream)",
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
										"media"
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
									name: "Minion3665",
									specials: [
										"webowner"
									]
								},
								{
									role: "mod",
									name: "The Rising Sea"
								},
								{
									role: "tmod",
									name: "Gamespere12"
								},
								{
									role: "tmod",
									name: "Mexican country ball"
								},
								{
									role: "tmod",
									name: "Neptune05"
								},
								{
									role: "tmod",
									name: "Daniel_D_Diamond"
								},
								{
									role: "tmod",
									name: "Lo-Mein™"
								},
								{
									role: "mod",
									name: "Mr_Cowboy"
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

class Error404 extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="page one variant2">
					<div className="textblock">Hey, that's a 404.<br />That resource was not found on chromebot.cf.</div>
					<Button important onClick={(button) => window.location.href = "/"}>Back To Home</Button>
				</div>
				<div className="page two variant2"></div>
					<div className="textblock">Website made by <a href="https://github.com/minion3665">@Minion3665</a> on github</div>
					<div className="textblock">Discord server made by <a href="https://github.com/chromebook777">@Chromebook777</a> on github</div>
					<div className="textblock">vincentdistoer (Broken Arm)#0001 on discord had the initial idea of creating a website</div>
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
		fetch('https://discordapp.com/api/guilds/480959345601937410/widget.json',
    {
        credentials: 'same-origin'
    }
		).then(res => res.json()
		).then((result) => {
    		 //Result is the result from the api
    		let vinceOn = false;
  		  result.members.forEach((member) => {
   		     if (member.id == 333577541069832203) {
 		           vinceOn = true;
		        }
		    });
				this.setState({vinceOn: vinceOn});
		});
	}
	render() {
		if (this.state.vinceOn === "checking") {
			return (
				<h1>Getting the latest data...</h1>
			);
		} else if (this.state.vinceOn) {
			return (
				<h1>Vince is ONLINE 🎉</h1>
			);
		} else {
			return (
				<h1>Vince is OFFLINE ❌</h1>
			);
		}
	}
}
class MemberList extends Component {
	constructor(props) {
		super(props);
	}
	renderSpecials(member) {
		if (member.specials) {
			return member.specials.sort((special1, special2) => {
				let specials = ["support", "media", "admin"];
				return -(specials.indexOf(special1) - specials.indexOf(special2));
			}).map((special) => {
				let specials = {
					support: {
						description: "This user is on the chromebot support team",
						emoji: "🤖"
					},
					media: {
						description: "This user is on the server media team",
						emoji: "🎥"
					},
					admin: {
						description: "This user has full admin permissions",
						emoji: "⚡"
					},
					webowner: {
						description: "This user owns this website",
						emoji: "🌐"
					}
				};
				return (
					<span className="disable-select tooltip" data-tooltip={specials[special].description}>{specials[special].emoji}</span>
				);
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				{this.props.members.sort((member1, member2) => {
					let roles = ["tmod", "jmod", "mod", "headwebdev", "headbotdev", "headdev", "admin", "manager", "owner", "founder"];
					 if (roles.indexOf(member1.role) - roles.indexOf(member2.role) === 0) {
						if ([member1.name.toLowerCase(), member2.name.toLowerCase()].sort()[0] === member1.name.toLowerCase()) {
							return -1;
						} else {
							return 1
						}
					} else {
						return -(roles.indexOf(member1.role) - roles.indexOf(member2.role));
					}
				}).map((member) => {
					return (
						<React.Fragment>
							<Tag type={member.role}/> {member.name} {this.renderSpecials(member)}<br/>
						</React.Fragment>
					);
				})}
			</React.Fragment>
		);
	}
}
class Tag extends Component {
	constructor(props) {
		super(props);
		let tagTypes = {
			"founder":{"title":"Founder of Chromebook777 Productions", "background-color":"#070000", "color":"#ffffff"},
			"owner":{"title":"Owner", "background-color":"#007C1D", "color":"#ffffff"},
			"manager":{"title":"Staff Management", "background-color":"#992D22", "color":"#ffffff"},
			"admin":{"title":"Admin", "background-color":"#187E04", "color":"#ffffff"},
			"headdev":{"title":"Head of Development", "background-color":"#FF9600", "color":"#000000"},
			"headbotdev":{"title":"Head of Bot Development", "background-color":"#FF0000", "color":"#000000"},
			"headwebdev":{"title":"Head of Website Development", "background-color":"#9B59B6", "color":"#000000"},
			"mod":{"title":"Moderator", "background-color":"#A84300", "color":"#ffffff"},
			"jmod":{"title":"Junior-Moderator", "background-color":"#A84300", "color":"#ffffff"},
			"tmod":{"title":"Trial-Moderator", "background-color":"#00EEFF", "color":"#000000"}
		}
		if (props.color && props.title && props["background-color"]) {
			this.state = {color: props.color, title: props.title};
		} else if (props.type && props.type in tagTypes) {
			this.state = {color: tagTypes[props.type].color, title: tagTypes[props.type].title, "background-color": tagTypes[props.type]["background-color"]};
		} else {
			this.state = {"background-color": "#ffffff", title: "DEFAULT", "color":"#000000"};
		}
	}
	render() {
		return (
			<b style={{color: this.state.color, backgroundColor: this.state["background-color"], borderRadius: "5px", display: "inline-block", padding: "5px", margin:"5px"}}>{this.state.title}</b>
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
