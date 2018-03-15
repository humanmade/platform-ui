import React from 'react';

class WidgetSettings extends React.Component {
	render() {
		return (
			<div className="widget__header__settings">
				{this.props.children}
			</div>
		);
	}

}

export default WidgetSettings;
