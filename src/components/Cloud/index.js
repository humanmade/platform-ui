/*global HM*/
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import DashboardWrapper from '../Dashboard-Wrapper';
import PullRequests from './Pull-Requests';
import EnvironmentData from './Environment-Data';
import ContactDetails from './Contact-Details';
import Deploys from './Deploys';
import PageGenerationTime from './Page-Generation-Time';
import BandwidthUsage from './Bandwidth-Usage';
import Support from './Support';

const HeaderLinks = styled.nav`
	display: block;
	margin-top: 15px;
	a {
		display: inline-block;
		margin-right: 12px;
		font-size: 16px;
	}
`;

class Cloud extends Component {
	render() {
		const { EnterpriseKit: ek, Environment: env } = HM.UI;
		const { type: envType, region: envRegion, name: envName } = env;

		return (
			<Fragment>
				<Header key="header" title="Cloud">
					<HeaderLinks>
						<Link to={`/documentation/${ ek.DocsVersion }/cloud`}>Documentation</Link>
						{ envType !== 'local' ? (
							<a
								target="_vantage"
								href={ `https://vantage.aws.hmn.md/#/${ envRegion }/${ envName }` }
							>Open in Vantage</a>
						) : null }
					</HeaderLinks>
				</Header>
				<DashboardWrapper>
					<Support />
					<EnvironmentData />
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
