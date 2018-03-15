import React from 'react';

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

export default WidgetContainer;
