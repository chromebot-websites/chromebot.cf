import React, { Component } from 'react';

class Error extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="page one variant2">
					<div className="textblock">Hey, that's an error .<br />That resource was not found on chromebot.cf.</div>
					<Button important onClick={(button) => window.location.href = "/"}>Back To Home</Button>
					<Button destructive onClick={(button) => window.location.href = "https://github.com/chromebook777-productions/chromebot.cf/issues"}>Report a bug if you believe this is in issue</Button>
				</div>
				<div className="page two variant2">
					<div className="textblock">Website made by <a href="https://github.com/minion3665">@Minion3665</a> on github</div>
					<div className="textblock">Discord server made by <a href="https://github.com/chromebook777">@Chromebook777</a> on github</div>
					<div className="textblock">vincentdistoer (Broken Arm)#0001 on discord had the initial idea of creating a website</div>
				</div>
			</React.Fragment>
		);
	}
}

module.exports = Error;
