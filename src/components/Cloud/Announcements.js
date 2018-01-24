import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLabel } from 'victory';

import DashboardBlock from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';
import { convertBytesToGigabytes } from '../../utils';

/**
 * Display an announcement fed in from the HM Stack
 *
 * @param {String} buttonText  Text to display in a button link.
 * @param {String} description More contextual information about the announcement.
 * @param {String} link        Link for the button.
 * @param {String} title       Main title for the announcement.
 */
const Announcements = ( { buttonText, description, link, title } ) => {
	return <DashboardBlock title="Announcement" id="announcements-block">
		<div className="announcement-block-content">
			<h3 className="announcement-bloc__title">{ title }</h3>
			{ description && <p className="announcement-block__description">{ description }</p> }
			{ ( buttonText && link )
				? <a className="button button-primary" href={ link } target="_blank">{ buttonText } <span className="screen-reader-text">Opens in a new window</span></a>
				: null
			}
		</div>
	</DashboardBlock>
}

Announcements.propTypes = {
	buttonText:  PropTypes.string,
	description: PropTypes.string,
	link:        PropTypes.string,
	title:       PropTypes.string,
}

export default Announcements;
