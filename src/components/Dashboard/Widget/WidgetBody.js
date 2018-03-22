import React from 'react';

class WidgetBody extends React.Component {
	render() {
		return (
			<div className="widget__body">
				{this.props.children}
			</div>
		);
	}
}

export default WidgetBody;
