/* global HM */
import React from 'react';
import PropTypes from 'prop-types';

import DashboardBlock from '../Dashboard-Block';
import PullRequestItem from './Pull-Request-Item';
import withFetch from "../../utils/withFetch"

/**
 * List all open Pull Requests against the particular site.
 *
 * @param {Array}   data    Pull Requests.
 * @param {Boolean} loading Whether data is still fetching or not.
 */
export const PullRequests = ( { data, loading } ) => <DashboardBlock title="Pull Requests" isLoading={ loading }>
	{ ( data && data.length > 0 )
		? <ul>
			{ data.map( pr => <PullRequestItem {...pr} /> ) }
		</ul>
		: <p>No Open Pull Requests</p>
	}
</DashboardBlock>

PullRequests.defaultTypes = { items: [] }

PullRequests.propTypes = {
	items: PropTypes.shape( {
		date:       PropTypes.string,
		id:         PropTypes.number,
		link:       PropTypes.string,
		status:     PropTypes.string,
		statusText: PropTypes.string,
		title:      PropTypes.string,
	} ),
}

export default withFetch(
	`${HM.EnterpriseKit.DocsURL}/wp-json/hm-stack/v1/pull-requests`
)( PullRequests );
