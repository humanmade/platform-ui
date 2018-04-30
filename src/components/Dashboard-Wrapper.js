import React from 'react';

/**
 * Dashboard wrapper div markup
 *
 * @param {Array}  children React children.
 */
const DashboardWrapper = ( { children } ) => {
	const colCount = Math.ceil( children.length / 2 );

	return (
		<div id="dashboard-widgets-wrap">
			<div id="dashboard-widgets" className="cloud metabox-holder">
				<div className="postbox-container">
					<div className="meta-box-sortables">
						{ children.slice( 0, colCount ) }
					</div>
				</div>
				<div className="postbox-container">
					<div className="meta-box-sortables">
						{ children.slice( colCount ) }
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardWrapper;
