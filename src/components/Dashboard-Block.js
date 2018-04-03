import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic Dashboard wrapper block for displaying some information in the admin.
 *
 * @param {String} title    Title to display in collapsbile header.
 * @param {Array}  children React children.
 * @param {String} id       Unique ID to display for the block.
 */
const DashboardBlock = ( { title, children, id } ) => (
	<div className="postbox" id={ id } >
		<button type="button" className="handlediv" aria-expanded="true">
			<span className="screen-reader-text">Toggle panel: { title }</span>
			<span className="toggle-indicator" aria-hidden="true" />
		</button>
		<h2 className="hndle"><span>{title}</span></h2>
		<div className="inside">
			{children}
		</div>
	</div>
);

DashboardBlock.propTypes = {
	id:    PropTypes.string,
	title: PropTypes.string,
}

export default DashboardBlock;
