import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withData } from '../Dashboard-Block';

/**
 * Data about the current environment's data.
 *
 * @param {Object} data    Data loaded from API.
 * @param {Object} loading Whether data is still loading or not.
 */
const EnvironmentData = ( { data } ) => {
	if ( ! data ) {
		return <p>No data found.</p>;
	}

	const { git_data: git, environment_data: environment } = data;

	return (
		<div className="environment-data">
			{ git ? (
				<div className="environment-data-block">
					<h3 className="environment-data-block__title">Application Version</h3>
					<dl>
						<dt>Git Branch:</dt>
						<dd>{ git.branch }</dd>
						<dt>Commit:</dt>
							{ git.commit && (
								<dd>
									<code className="commit-hash">{ git.commit.rev.substring( 0, 7 ) }</code>
									<img className="commit-avatar" src={ git.commit.user.avatar_urls['96'] } alt={ git.commit.user.name } />
									<span className="commit-user">{ git.commit.user.name }</span>
								</dd>
							) }
					</dl>
					{ git.commit && <p className="commit-message">{ git.commit.description }</p> }
				</div>
			) : null }
			{ environment ? (
				<div className="environment-data-block">
					<h3 className="environment-data-block__title">HM Cloud Software</h3>
					<dl>
						<dt>HM Platform:</dt>
						<dd>{ environment.hmplatform }</dd>
						<dt>{ environment.architecture }:</dt>
						<dd>{ environment.version }</dd>
						<dt>PHP:</dt>
						<dd>v{ environment.php }</dd>
						<dt>MySQL:</dt>
						<dd>v{ environment.mysql }</dd>
						{ environment.elasticsearch &&
							<Fragment>
								<dt>Elasticsearch:</dt>
								<dd>v{ environment.elasticsearch }</dd>
							</Fragment>
						}
					</dl>
				</div>
			) : null }
		</div>
	);
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
			php:           PropTypes.string,
			mysql:         PropTypes.string,
			elasticsearch: PropTypes.string,
		} ),
	} ),
}

const EnvironmentDataWithData = withData( {
	url: 'hm-stack/v1/environment-data/',
	title: 'Application Data',
	id: 'cloud-environment-data-block',
} )( EnvironmentData );

export default EnvironmentDataWithData;
