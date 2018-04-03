import PropTypes from 'prop-types';
import React  from 'react';
import withApiFetch from '../../utils/withApiFetch';
import { compose } from 'recompose';

import DashboardBlock from '../Dashboard-Block';

/**
 * Data about the current environment's data.
 *
 * @param {Object} data    Data loaded from API.
 * @param {Object} loading Whether data is still loading or not.
 */
const ContactDetails = ( { data: { contact_data } } ) => {
	if ( ! contact_data ) {
		return null;
	}

	return (
		<DashboardBlock title="Contact Details" id="contact-details">
			<div className="contact-details">
				{ contact_data.client && (
					<div className="contact-details__section">
						<h3 className="contact-details__title">Client Contact</h3>
						<address className="contact-details__contact contact-client">{ contact_data.client }</address>
					</div>
				) }

				{ contact_data.provider && (
					<div className="contact-details__section">
						<h3 className="contact-details__title">Provider Contact</h3>
						<address className="contact-details__contact contact-provider">{ contact_data.provider }</address>
					</div>
				) }
			</div>
		</DashboardBlock>
	);
}


ContactDetails.propTypes = {
	data: PropTypes.shape( {
		contact_data: PropTypes.shape( {
			client:   PropTypes.string,
			provider: PropTypes.string,
		} )
	} ),
	loading: PropTypes.bool,
}

const ContactDetailsWithData = compose(
	withApiFetch( 'hm-stack/v1/environment-data/' )
)( ContactDetails );

export default ContactDetailsWithData;
