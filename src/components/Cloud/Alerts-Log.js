import PropTypes from 'prop-types';
import React from 'react';
import withApiFetch from '../../utils/withApiFetch';
import { compose } from 'recompose';

import DashboardBlock from '../Dashboard-Block';
import AlertItem from './Alert-Item';

/**
 * List all open alerts/ivity on a site's server.
 *
 * @param {Boolean} loading Whether data is still fetching or not.
 * @param {Array} items Alerts.
 */
const AlertsLog = ( { data, loading } ) => <DashboardBlock title="Activity Log" isLoading={ loading }>
	{ ( data && data.length > 0 )
		? <ul className="alert-listing">
			{ data.map( alert => <AlertItem key={ alert.id } {...alert} /> ) }
		</ul>
		: <p>No Activity to Report</p>
	}
</DashboardBlock>

AlertsLog.defaultProps = { data: [] }

AlertsLog.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape( {
			date:        PropTypes.string,
			id:          PropTypes.string,
			description: PropTypes.string,
		} )
	),
	loading: PropTypes.boolean,
}

const AlertsLogWithData = compose(
	withApiFetch( 'hm-stack/v1/activity/' )
)( AlertsLog );

export default AlertsLogWithData;
