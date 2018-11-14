import PropTypes from 'prop-types';
import React from 'react';

import orWpError from '../../utils/wp-error';
import { withData } from '../Dashboard-Block';
import PullRequestItem from './Pull-Request-Item';

/**
 * List all open Pull Requests against the particular site.
 *
 * @param {Array} items Pull Requests.
 */
const PullRequests = ( { data } ) => {
	if ( ! data || ! data.length ) {
		return <p>No pull requests found.</p>;
	}
	return (
		<ul>
			{ data.map( pr => <PullRequestItem key={ pr.id } {...pr} /> ) }
		</ul>
	);
}

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

const PullRequestsWithData = withData( {
	url: 'hm-stack/v1/pull-requests/',
	id: 'cloud-pr-block',
	title: 'Pull Requests',
} )( PullRequests );

export default PullRequestsWithData;
