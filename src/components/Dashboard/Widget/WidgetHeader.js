import React from 'react';
import PropTypes from 'prop-types';

class WidgetHeader extends React.Component {
	render() {
		return (
			<div className="widget__header">
				<h2 className="widget__header__title">{this.props.title}</h2>
				{this.props.children}
			</div>
		);
	}
}

WidgetHeader.propTypes = {
	title: PropTypes.string.isRequired
}

export default WidgetHeader;
