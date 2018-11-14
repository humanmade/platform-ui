import PropTypes from 'prop-types';
import React from 'react';
import withApiFetch from '../../utils/withApiFetch';
import orWpError from '../../utils/wp-error';
import { compose } from 'recompose';

import DashboardBlock from '../Dashboard-Block';
import PullRequestItem from './Pull-Request-Item';

/**
 * List all open Pull Requests against the particular site.
 *
 * @param {Array} items Pull Requests.
 */
const PullRequests = ( { data, loading } ) => (
	<DashboardBlock id="cloud-pr-block" title="Pull Requests" isLoading={ loading }>
		{ ( data && data.length > 0 )
			? <ul>
				{ data.map( pr => <PullRequestItem key={ pr.id } {...pr} /> ) }
			</ul>
			: <p>No Open Pull Requests</p>
		}
	</DashboardBlock>
);

PullRequests.defaultProps = { data: [] }

PullRequests.propTypes = {
	data: orWpError(
		PropTypes.arrayOf(
			PropTypes.shape( {
				date:       PropTypes.string,
				id:         PropTypes.string,
				link:       PropTypes.string,
				status:     PropTypes.string,
				statusText: PropTypes.string,
				title:      PropTypes.string,
			} ),
		),
	),
	loading: PropTypes.bool,
}

const PullRequestsWithData = compose(
	withApiFetch( 'hm-stack/v1/pull-requests/' )
)( PullRequests );

export default PullRequestsWithData;
