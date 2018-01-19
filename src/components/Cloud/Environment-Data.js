import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withApiFetch from '../../utils/withApiFetch';
import { compose } from 'recompose';

import DashboardBlock from '../Dashboard-Block';

/**
 * Data about the current environment's data.
 *
 * @param {Object} data    Data loaded from API.
 * @param {Object} loading Whether data is still loading or not.
 */
const EnvironmentData = ( { data: { git_data, environment_data } } ) => {
	if ( ! git_data ) { return ''; }

	return (
		<DashboardBlock title="Application Data" id="environment-data">
			<div className="environment-data">
				<div className="environment-data-block">
					<h3 className="environment-data-block__title">Application Version</h3>
					<dl>
						<dt>Git Branch:</dt>
						<dd>{ git_data.branch }</dd>
						<dt>Commit:</dt>
							{ git_data.commit && (
								<dd>
									<code className="commit-hash">{ git_data.commit.rev.substring( 0, 7 ) }</code>
									<img className="commit-avatar" src={ git_data.commit.user.avatar_urls['96'] } title={ git_data.commit.user.name } />
									<span className="commit-user">{ git_data.commit.user.name }</span>
								</dd>
							) }
					</dl>
					{ git_data.commit && <p className="commit-message">{ git_data.commit.description }</p> }
				</div>
				<div className="environment-data-block">
					<h3 className="environment-data-block__title">HM Cloud Software</h3>
					<dl>
						<dt>HM Platform:</dt>
						<dd>{ environment_data.hmplatform }</dd>
						<dt>{ environment_data.architecture }:</dt>
						<dd>{ environment_data.version }</dd>
						<dt>PHP:</dt>
						<dd>v{ environment_data.php }</dd>
						<dt>MySQL:</dt>
						<dd>v{ environment_data.mysql }</dd>
						{ environment_data.elasticsearch &&
							<Fragment>
								<dt>Elasticsearch:</dt>
								<dd>v{ environment_data.elasticsearch }</dd>
							</Fragment>
						}
					</dl>
				</div>
			</div>
		</DashboardBlock>
	);
}


EnvironmentData.propTypes = {
	git_data: PropTypes.shape( {
		branch: PropTypes.string,
		commit: PropTypes.shape( {
			date:        PropTypes.string,
			description: PropTypes.string,
			rev:         PropTypes.string,
			status:      PropTypes.string,
		} ),
		environment_data: PropTypes.shape( {
			php:           PropTypes.string,
			mysql:         PropTypes.string,
			elasticsearch: PropTypes.string,
		} ),
	} ),
	loading: PropTypes.bool,
}

const EnvironmentDataWithData = compose(
	withApiFetch( 'hm-stack/v1/environment-data/' )
)(EnvironmentData);

export default EnvironmentDataWithData;
