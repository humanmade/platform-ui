import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'recompose';

import withApiFetch from '../../utils/withApiFetch';
import orWpError from '../../utils/wp-error';
import DashboardBlock from '../Dashboard-Block';
import DeployItem, { propTypes as itemPropTypes } from './Deploy-Item';
import Spinner from '../Spinner';

/**
 * List all open Pull Requests against the particular site.
 *
 * @param {Array} items Pull Requests.
 */
const Deploys = props => {
	const { data, loading, error } = props;

	return (
		<DashboardBlock id="cloud-deploys-block" title="Deploys">
			{ ( ! loading && ! error && data ) && data.slice( 0, 5 ).map( item => (
				<DeployItem key={ item.id } { ...item } />
			) ) }
			{ ( ! loading && ! error && ! data )
				&& <p>No deployment history found</p>
			}
			{ ( loading )
				&& <p><Spinner /> Loading...</p>
			}
			{ ( error )
				&& <p>There was an error fetching the deployment history. We're working on it!</p>
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
