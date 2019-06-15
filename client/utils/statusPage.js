import React, { Component } from 'react';

class StatusPage extends Component {
	constructor(props) {
		super(props);
		this.state = {color: "grey", message: "Getting the latest data for <span className='highlight'>"+props.botname+"</span>"};
	}
	render () {
		return (
			<React.Fragment>
				<div className="page statusPage" style={{backgroundColor: this.state.color, backgroundImage: "linear-gradient(to bottom, "+this.props.prevColor+" 0%, "+this.state.color+" 10%, "+this.state.color+" 90%, "+this.props.nextColor+" 100%)"}}>
					<b>{this.state.message}</b>
				</div>
			</React.Fragment>
		);
	}
}

export default StatusPage
