import React from 'react';
import PropTypes from 'prop-types';

import DashboardBlock from '../Dashboard-Block';

/**
 * Display email addresses for important points of contact for the site.
 *
 * @param {Array} contacts Contacts to display.
 * @param {Boolean} loading Whether data is still fetching or not.
 */
const PointsOfContact = ( { data, loading } ) => <DashboardBlock title="Internal Point of Contact" id="points-of-contact" isLoading={ loading }>
	<div className="points-of-contact">
		{ data.map( item => {
			return <div className="points-of-contact__section">
				<h3 className="points-of-contact__title">{ item.title }</h3>

				{ item.emails.map( email => <a className="points-of-contact__email" href={ `mailto:${ email }` }>{ email }</a> ) }
			 </div>
		} ) }
	</div>
</DashboardBlock>

PointsOfContact.defaultProps = { contact: [] }

PointsOfContact.propTypes = {
	contacts: PropTypes.arrayOf( [
		PropTypes.shape( {
			title:  PropTypes.string,
			emails: PropTypes.arrayOf( [ PropTypes.string ] ),
		} ),
	] ),
}

export default PointsOfContact;
