import React from 'react';
import icons from './Icons';
import Popup from 'reactjs-popup';

class WidgetControls extends React.Component {
	render() {
		const Icon = icons.settings;
		return (
			<div className="widget__header__controls">
				<Popup
					trigger={open => (
						<button className="button">Settings</button>
					)}
					position="right center"
					closeOnDocumentClick
				>
					Show x posts
				</Popup>
				<Icon />
				{this.props.children}
			</div>
		);
	}
}

export default WidgetControls;
