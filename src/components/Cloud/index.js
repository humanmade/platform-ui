/*global HM*/
import React, { Fragment } from 'react';
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

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud">
					<HeaderLinks>
						<Link to={`/documentation/${HM.UI.EnterpriseKit.DocsVersion}/cloud`}>Documentation</Link>
						{ HM.UI.Environment.type !== 'local' && (
							<a target="_vantage" href={`https://vantage.aws.hmn.md/#/${HM.UI.Environment.region}/${HM.UI.Environment.name}`}>Open in Vantage</a>
						) }
					</HeaderLinks>
				</Header>
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
