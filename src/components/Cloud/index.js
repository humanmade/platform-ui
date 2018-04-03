import React, { Fragment } from 'react';
import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<DashboardWrapper>
					<EnvironmentData />
					<PullRequests />
				</DashboardWrapper>
			</Fragment>
		);
	}
}

export default Cloud;
