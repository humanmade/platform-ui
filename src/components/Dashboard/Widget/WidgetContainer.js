import React from 'react';
import PropTypes from 'prop-types';

class WidgetContainer extends React.Component {
	render() {
		const classes = `widget__container widget widget--${this.props.name} ${this.props.width}`
		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}
}

WidgetContainer.defaultProps = {
	width: 'full-width'
}

WidgetContainer.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.string
}
export default WidgetContainer;
