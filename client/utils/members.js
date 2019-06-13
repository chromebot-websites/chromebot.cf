import React, { Component } from 'react';

class MemberList extends Component {
	constructor(props) {
		super(props);
	}
	renderSpecials(member) {
		if (member.specials) {
			return member.specials.sort((special1, special2) => {
				let specials = ["webowner", "weebly", "nostaff", "excluded", "support", "media", "admin"];
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
					},
					excluded: {
						description: "This user is not in the chromebook777 productions discord server",
						emoji: "🚫",
						overrides: [
							"nostaff",
							"admin",
							"media",
							"support"
						]
					},
					weebly: {
						description: "This user uses weebly to build their sites",
						emoji: "🧱"
					},
					nostaff: {
						description: "This user has no staff on the discord server",
						emoji: "💼"
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
					let roles = ["tmod", "jmod", "mod", "miniwebdev", "webdev", "miniwebman", "webman", "miniheadwebdev", "headwebdev", "headbotdev", "headdev", "admin", "manager", "owner", "founder"];
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
			"miniheadwebdev":{"title":"Head of Minion3665's Website Development", "background-color":"#9B59B6", "color":"#000000"},
			"webman":{"title":"Website Manager", "background-color":"#1ABC9C", "color":"#000000"},
			"miniwebman":{"title":"Minion3665's Website Manager", "background-color":"#1ABC9C", "color":"#000000"},
			"webdev":{"title":"Website Developer", "background-color":"#1ABC9C", "color":"#000000"},
			"miniwebdev":{"title":"Minion3665's Website Developer", "background-color":"#1ABC9C", "color":"#000000"},
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

module.exports = {MemberList, Tag};
