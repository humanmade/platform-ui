import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import orWpError from '../../utils/wp-error';
import { withData } from '../Dashboard-Block';
import DeployItem, { propTypes as itemPropTypes } from './Deploy-Item';

/**
 * List all open Pull Requests against the particular site.
 */
const Deploys = ( { data } ) => {
	if ( ! data || ! data.length ) {
		return <p>No deployment history found</p>;
	}

	return (
		<Fragment>
			{ data.slice( 0, 5 ).map( item => (
				<DeployItem key={ item.id } { ...item } />
			) ) }
		</Fragment>
	);
};

Deploys.defaultProps = { data: [] };

Deploys.propTypes = {
	data: orWpError( PropTypes.arrayOf(
		PropTypes.shape( itemPropTypes ),
	) ),
	loading: PropTypes.bool,
};

const DeploysWithData = withData( {
	url: 'hm-stack/v1/deploys/',
	id: 'cloud-deploys-block',
	title: 'Deploys',
} )( Deploys );

export default DeploysWithData;
