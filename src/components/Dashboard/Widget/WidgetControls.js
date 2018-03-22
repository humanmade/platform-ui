import React from 'react';

class WidgetControls extends React.Component {
	render() {
		return (
			<div className="widget__header__controls">
				{this.props.children}
			</div>
		);
	}
}

export default WidgetControls;
