import React, { Fragment } from 'react';
import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';
import ContactDetails from './Contact-Details';
import PageGenerationTime from './Page-Generation-Time';
import BandwidthUsage from './Bandwidth-Usage';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<DashboardWrapper>
					<EnvironmentData />
					<PullRequests />
					<ContactDetails />
					<PageGenerationTime />
					<BandwidthUsage />
				</DashboardWrapper>
			</Fragment>
		);
	}
}

export default Cloud;
