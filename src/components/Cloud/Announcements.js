import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLabel } from 'victory';

import DashboardBlock from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';
import { convertBytesToGigabytes } from '../../utils';

/**
 * Display an announcement fed in from the HM Stack
 *
 * @param {String} buttonText
 * @param {String} description
 * @param {String} link
 * @param {String} title
 */
const Announcements = ( { buttonText, description, link, title } ) => {
	return <DashboardBlock title="Announcement">
		<div className="announcement-block-content">
			<h3 className="announcement-bloc__title">{ title }</h3>
			{ description && <p className="announcement-block__description">{ description }</p> }
			{ ( buttonText && link )
				? <a className="button button-primary announcement-block__button" href={ link } target="_blank"><span className="screen-reader-text">Opens in a new window</span>{ buttonText }</a>
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
