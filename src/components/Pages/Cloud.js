import React, { Component } from 'react';

import PullRequests from '../Cloud/Pull-Requests';
import EnvironmentData from '../Cloud/Environment-Data';

class Cloud extends Component {

	render() {
		return <div className="wrap">
			<h2>Cloud Data</h2>

			<div id="dashboard-widgets-wrap">
				<div className="metabox-holder" id="dashboard-widgets">
					<div id="postbox-container-1" className="postbox-container">
						<PullRequests />
					</div>
					<div id="postbox-container-2" className="postbox-container">
						<EnvironmentData />
					</div>
				</div>
			</div>
		</div>
	}
}

export default Cloud;
