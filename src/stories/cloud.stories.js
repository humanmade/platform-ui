import React from 'react';

import { storiesOf } from '@storybook/react';

import BandwidthUsage from '../components/Cloud/Bandwidth-Usage'
import PageGenerationTime from '../components/Cloud/Page-Generation-Time'
import AlertsLog from '../components/Cloud/Alerts-Log'
import { EnvironmentData } from '../components/Cloud/Environment-Data'
import { PullRequests } from '../components/Cloud/Pull-Requests'
import { DashboardAdminDecorator } from './decorators';

import {
	alerts,
	bandwidthUsage,
	gitData,
	environmentData,
	pullRequests,
	responseTimeHistory,
} from './cloud-data-stubs';

/**
 * Stories for HM-Cloud UI components.
 */
storiesOf( 'Cloud', module )
	.addDecorator( DashboardAdminDecorator )
	.add( 'Activity Log', () => <AlertsLog data={ alerts } loading={ false } /> )
	.add( 'Application Data', () => <EnvironmentData
		data={ {
			git_data:         gitData,
			environment_data: environmentData,
		} }
		loading={ false }
	/> )
	.add( 'Bandwidth Usage', () => <BandwidthUsage data={ bandwidthUsage } loading={ false } /> )
	.add( 'Page Generation Time', () => <PageGenerationTime data={ responseTimeHistory } loading={ false } /> )
	.add( 'Pull Requests', () => <PullRequests data={ pullRequests } loading={ false } /> );
