import PropTypes from 'prop-types';
import React  from 'react';

import orWpError from '../../utils/wp-error';
import { withData } from '../Dashboard-Block';

const NothingFound = () => <p>No data found.</p>;

/**
 * Data about the current environment's data.
 */
const ContactDetails = ( { data } ) => {
	if ( ! data ) {
		return <NothingFound />;
	}

	const { contact_data } = data;

	if ( ! contact_data ) {
		return <NothingFound />;
	}

	const { client, provider } = contact_data;

	if ( ! client && ! provider ) {
		return <NothingFound />;
	}

	return (
		<div className="contact-details">
			{ client ? (
				<div className="contact-details__section">
					<h3 className="contact-details__title">Client Contact</h3>
					<address className="contact-details__contact contact-client">{ client }</address>
				</div>
			) : null }
			{ provider ? (
				<div className="contact-details__section">
					<h3 className="contact-details__title">Provider Contact</h3>
					<address className="contact-details__contact contact-provider">{ provider }</address>
				</div>
			) : null }
		</div>
	);
};

ContactDetails.propTypes = {
	data: orWpError(
		PropTypes.shape( {
			contact_data: PropTypes.shape( {
				client:   PropTypes.string,
				provider: PropTypes.string,
			} )
		} ),
	),
};

const ContactDetailsWithData = withData( {
	url: 'hm-stack/v1/environment-data/',
	title: 'Contact Details',
	id: 'cloud-contact-details-block',
} )( ContactDetails );

export default ContactDetailsWithData;
