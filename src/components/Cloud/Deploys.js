import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'recompose';

import withApiFetch from '../../utils/withApiFetch';
import orWpError from '../../utils/wp-error';
import DashboardBlock from '../Dashboard-Block';
import DeployItem, { propTypes as itemPropTypes } from './Deploy-Item';

/**
 * List all open Pull Requests against the particular site.
 *
 * @param {Array} items Pull Requests.
 */
const Deploys = props => {
	const { data, loading } = props;

	return (
		<DashboardBlock title="Deploys">
			{ ( ! loading && data.length ) && data.slice( 0, 5 ).map( item => (
				<DeployItem key={ item.rev } { ...item } />
			) ) }
			{ ( ! loading && ! data.length )
				&& <p>No deployment history was found.</p>
			}
		</DashboardBlock>
	);
};

Deploys.defaultProps = { data: [] };

Deploys.propTypes = {
	data: orWpError( PropTypes.arrayOf(
		PropTypes.shape( itemPropTypes ),
	) ),
	loading: PropTypes.bool,
};

const DeploysWithData = compose(
	withApiFetch( 'hm-stack/v1/deploys/' )
)( Deploys );

export default DeploysWithData;
