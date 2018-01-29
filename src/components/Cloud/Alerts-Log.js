import React from 'react';
import PropTypes from 'prop-types';

import DashboardBlock from '../Dashboard-Block';
import AlertItem from './Alert-Item';

/**
 * List all open alerts/activity on a site's server.
 *
 * @param {Array}   data    Alerts.
 * @param {Boolean} loading Whether data is still fetching or not.
 */
const AlertsLog = ( { data, loading } ) => <DashboardBlock title="Activity Log" isLoading={ loading }>
	{ ( data && data.length > 0 )
		? <ul className="alert-listing">
			{ data.map( alert => <AlertItem key={ alert.id } {...alert} /> ) }
		</ul>
		: <p>No Activity to Report</p>
	}
</DashboardBlock>

AlertsLog.defaultTypes = { data: [] }

AlertsLog.propTypes = {
	data: PropTypes.shape( {
		date:       PropTypes.string,
		level:      PropTypes.number,
		message:    PropTypes.string,
	} ),
	loading: PropTypes.boolean,
}

export default AlertsLog;
