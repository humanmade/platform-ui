import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLabel } from 'victory';

import DashboardBlock from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';
import { convertBytesToGigabytes } from '../../utils';

/**
 * Display an announcement fed in from the HM Stack
 *
 * @param {String}  data    Announcements.
 * @param {Boolean} loading Whether data is still fetching or not.
 */
const Announcements = ( { data, loading } ) => {
	let { buttonText, description, link, title } = data;

	return <DashboardBlock title="Announcement" id="announcements-block" isLoading={ loading }>
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
