import React, { Component } from "react";
import Status from "./../utils/status.js";

class Statuses extends Component {
	render () {
		return (
			<div className="centerContainer">
				<Status
					botName="Chromebot"
					botId="499262934715727872"
					serverId="480959345601937410"
				/>
				<Status
					botName="Chromebot Canary"
					botId="555361766947815424"
					serverId="480959345601937410"
				/>
				</div>
				<div className="centerContainer">
				<Status
					botName="Chromebot ModMail"
					botId="587060114318688256"
					serverId="480959345601937410"
				/>
				<Status
					botName="Chromebot Manager"
					botId="599743179608293398"
					serverId="480959345601937410"
				/>
			</div>
		);
	}
}

export default Statuses;
