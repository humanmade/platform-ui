import React from 'react';
import icons from './Icons';
import Popup from 'reactjs-popup';

class WidgetSettings extends React.Component {
	render() {
		const SettingsIcon = icons.settings;
		return (
			<div className="widget__header__settings">
				<Popup
					trigger={open => (
						<SettingsIcon />
					)}
					position="left bottom"
					on="hover"
				>
					{this.props.children}
				</Popup>

			</div>
		);
	}

}

export default WidgetSettings;
