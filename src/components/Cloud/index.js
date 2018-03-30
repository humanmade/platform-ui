import React, { Fragment } from 'react';
import Header from '../Header';

class Cloud extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Cloud" />
				<div className="cloud">
					<p>Here's where the Cloud UI page goes.</p>
				</div>
			</Fragment>
		);
	}
}

export default Cloud;
