import React, { Fragment } from 'react';
import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';
import ContactDetails from './Contact-Details';
import Deploys from './Deploys';
import PageGenerationTime from './Page-Generation-Time';
import BandwidthUsage from './Bandwidth-Usage';
import Support from './Support';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<DashboardWrapper>
					<EnvironmentData />
					<Support />
					<PullRequests />
					<Deploys />
					<ContactDetails />
					<PageGenerationTime />
					<BandwidthUsage />
				</DashboardWrapper>
			</Fragment>
		);
	}
}

export default Cloud;
