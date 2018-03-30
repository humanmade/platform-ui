import React, { Fragment } from 'react';
import Header from '../Header';
import PullRequests from './Pull-Requests';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<div className="cloud metabox-holder">
					<PullRequests />
				</div>
			</Fragment>
		);
	}
}

export default Cloud;
