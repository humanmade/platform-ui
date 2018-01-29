import React from 'react';

import { storiesOf } from '@storybook/react';

import Announcements from '../components/Cloud/Announcements';
import BandwidthUsage from '../components/Cloud/Bandwidth-Usage'
import PageGenerationTime from '../components/Cloud/Page-Generation-Time'
import AlertsLog from '../components/Cloud/Alerts-Log'
import EnvironmentData from '../components/Cloud/Environment-Data'
import PointsOfContact from '../components/Cloud/Points-Of-Contact'
import PullRequests from '../components/Cloud/Pull-Requests'
import { DashboardAdminDecorator } from './decorators';

import {
	alerts,
	bandwidthUsage,
	contacts,
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
	.add( 'Announcements', () => <Announcements
		data={ {
			buttonText:  "Download",
			description: "To tackle the problem of serving large volumes of images for WordPress while minimising costs, we developed Tachyon, our open-source scalable image service.",
			link:        "https://humanmade.com/2017/04/27/scaling-wordpress-images-tachyon/",
			title:       "We have released a new whitepaper about Tachyon",
		} }
		loading={ false }
	/> )
	.add( 'Application Data', () => <EnvironmentData
		data={ {
			git_data:         gitData,
			environment_data: environmentData,
		} }
		loading={ false }
	/> )
	.add( 'Bandwidth Usage', () => <BandwidthUsage data={ bandwidthUsage } loading={ false } /> )
	.add( 'Page Generation Time', () => <PageGenerationTime data={ responseTimeHistory } loading={ false } /> )
	.add( 'Points of Contact', () => <PointsOfContact data={ contacts } loading={ false } /> )
	.add( 'Pull Requests', () => <PullRequests data={ pullRequests } loading={ false } /> );
