import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLabel } from 'victory';

import orWpError from '../../utils/wp-error';
import { withData } from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';
import { getHumanReadableBytes } from '../../utils';

/**
 * Display current bandwidth usage against a site for a rolling 30-day period.
 *
 * @param {Boolean} loading Whether data is still fetching or not.
 * @param {Array}   data    An array of usage data for the current site.
 */
const BandwidthUsage = ( { data } ) => {
	if ( ! Array.isArray( data ) || ! data.length ) {
		return <p>No data found.</p>;
	}

	// Add a label to the usage history for each item.
	const chartData = data.map( day => {
		const { date, usage } = day;
		const humanReadableBytes = getHumanReadableBytes( usage );
		const label = `${ new Date( date ).toLocaleDateString() } \r\n ${ humanReadableBytes }`

		return {
			...day,
			label,
		};
	} );

	// Compile all of the rolling usage data into one value.
	const totalBytes = chartData.reduce( ( carry, day ) => ( carry + day.usage ), 0 );

	const dateStyle = { grid: {
		fill: "none",
		stroke: "none",
		pointerEvents: "visible",
	} };

	return (
		<VictoryChart theme={ adminTheme } domainPadding={ 10 }>
			<VictoryLabel
				x={ 350 }
				y={ 25 }
				text={ `${ getHumanReadableBytes( totalBytes ) } cumulative` }
			/>
			<VictoryAxis
				dependentAxis
				tickCount={ 5 }
				tickFormat={ y => getHumanReadableBytes( y ) }
			/>
			<VictoryAxis
				label="(Date)"
				tickCount={ 7 }
				tickFormat={ x => new Date( x ).getDate() }
				style={ dateStyle }
			/>
			<VictoryBar
				data={ chartData }
				labelComponent={ <VictoryTooltip/> }
				x="date"
				y="usage"
			/>
		</VictoryChart>
	);
}

BandwidthUsage.defaultProps = {
	data: [],
};

BandwidthUsage.propTypes = {
	data: orWpError(
		PropTypes.arrayOf(
			PropTypes.shape( {
				usage: PropTypes.number,
				date:  PropTypes.string,
			} )
		)
	),
};

const BandwidthUsageWithData = withData( {
	url: 'hm-stack/v1/bandwidth-usage/',
	id: 'cloud-bw-usage-block',
	title: 'Bandwidth Usage',
} )( BandwidthUsage );

export default BandwidthUsageWithData;
