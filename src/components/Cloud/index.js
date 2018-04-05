import React, { Fragment } from 'react';
import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';
import AlertsLog from './Alerts-Log';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<DashboardWrapper>
					<EnvironmentData />
					<PullRequests />
					<AlertsLog />
				</DashboardWrapper>
			</Fragment>
		);
	}
}

export default Cloud;
