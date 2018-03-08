import React from 'react';

class WidgetContainer extends React.Component {
	render() {
		return (
			<div className="widget-container">
				{this.props.children}
			</div>
		);
	}
}

export default WidgetContainer;