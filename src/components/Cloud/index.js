import React, { Fragment } from 'react';
import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';
import ContactDetails from './Contact-Details';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<DashboardWrapper>
					<EnvironmentData />
					<PullRequests />
					<ContactDetails />
				</DashboardWrapper>
			</Fragment>
		);
	}
}

export default Cloud;
