import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic Dashboard wrapper block for displaying some information in the admin.
 *
 * @param {String}  id        Unique ID to display for the block.
 * @param {Boolean} isLoading Whether Data is loading
 * @param {String}  title     Title to display in collapsbile header.
 * @param {Array}   children  React children.
 */
const DashboardBlock = ( { id, isLoading, title, children } ) => {
	return <div className="meta-box-sortables">
		<div className="postbox" id={ id }>
			<button type="button" className="handlediv" aria-expanded="true">
				<span className="screen-reader-text">Toggle panel: { title }</span>
				<span className="toggle-indicator" aria-hidden="true" />
			</button>
			<h2 className="hndle"><span>{title}</span></h2>
			<div className={ `inside ${ isLoading ? ' dashboard-block--loading' : '' }` }>
				{ ! isLoading && children }
			</div>
		</div>
	</div>
}

DashboardBlock.defaultProps = { isLoading: true }

DashboardBlock.propTypes = {
	id:        PropTypes.string,
	isLoading: PropTypes.bool,
	title:     PropTypes.string,
}

export default DashboardBlock;
