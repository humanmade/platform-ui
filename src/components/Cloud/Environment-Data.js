/* global HM */
import React from 'react';
import PropTypes from 'prop-types';

import DashboardBlock from '../Dashboard-Block';
import withFetch from "../../utils/withFetch"

/**
 * Data about the current environment's data.
 *
 * @param {Object} loading Whether data is still loading or not.
 * @param {Object} data    Data loaded from API.
 */
export const EnvironmentData = ( { data, loading } ) => {
	data = 'git_data' in data ? data : {
		git_data:         {},
		environment_data: {},
	};

	let { git_data, environment_data } = data;
	return <DashboardBlock isLoading={loading} title="Application Data" id="environment-data">
		<div className="environment-data">
			<div className="environment-data-block">
				<h3 className="environment-data-block__title">Application Version</h3>
				<dl>
					<dt>Git Branch:</dt>
					<dd>{git_data.branch}</dd>
					<dt>Commit:</dt>
					<dd>{git_data.commit && `${ git_data.commit.description } (${ git_data.commit.rev.substring( 0, 7 ) })`}</dd>
				</dl>
			</div>
			<div className="environment-data-block">
				<h3 className="environment-data-block__title">HM Cloud Software</h3>
				<dl>
					<dt>PHP:</dt>
					<dd>v{environment_data.php}</dd>
					<dt>MySQL:</dt>
					<dd>v{environment_data.mySql}</dd>
					<dt>Elasticsearch:</dt>
					<dd>v{environment_data.elasticsearch}</dd>
				</dl>
			</div>
		</div>
	</DashboardBlock>
}

EnvironmentData.propTypes = {
	data: PropTypes.shape( {
		git_data: PropTypes.shape( {
			branch: PropTypes.string,
			commit: PropTypes.shape( {
				date:        PropTypes.string,
				description: PropTypes.string,
				rev:         PropTypes.string,
				status:      PropTypes.string,
			} ),
		} ),
		environment_data: PropTypes.shape( {
			php:          PropTypes.string,
			mySql:        PropTypes.string,
			elsticsearch: PropTypes.string,
		} ),
	} )
}

export default withFetch(
	`${HM.EnterpriseKit.DocsURL}/wp-json/hm-stack/v1/environment-data`
)( EnvironmentData );
