import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLabel } from 'victory';

import DashboardBlock from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';
import { convertBytesToGigabytes } from '../../utils';

/**
 * Display current bandwidth usage against a site for a rolling 30-day period.
 *
 * @param {Boolean} loading Whether data is still fetching or not.
 * @param {Array}   data    An array of usage data for the current site.
 */
const BandwidthUsage = ( { loading, data } ) => {
	// Add a label to the usage history for each item.
	data = data.map( day => {
		const convertedUsage = convertBytesToGigabytes( day.usage );
		day.label = `${ new Date( day.date ).toLocaleDateString() } \r\n ${ convertedUsage } GB`

		return day;
	} );

	// Compile all of the rolling usage data into one value.
	const totalBytes = data.reduce( ( carry, day ) => ( carry + day.usage ), 0 );

	return <DashboardBlock title="Bandwidth Usage" isLoading={ loading }>
		<VictoryChart
			theme={ adminTheme }
			domainPadding={ 10 }
		>
			<VictoryLabel
				x={ 350 }
				y={ 25 }
				text={ `${ convertBytesToGigabytes( totalBytes ) } GB cumulative` }
			/>
			<VictoryAxis
				dependentAxis
				tickCount={ 5 }
				tickFormat={ y => `${ convertBytesToGigabytes( y ) } GB` }
			/>
			<VictoryAxis
				label="(Date)"
				tickCount={ 7 }
				tickFormat={ x => new Date( x ).getDate() }
				style={
					{ grid: {
						fill: "none",
						stroke: "none",
						pointerEvents: "visible"
					} }
				}
			/>
			<VictoryBar
				data={ data }
				labelComponent={<VictoryTooltip/>}
				x="date"
				y="usage"
			/>
		</VictoryChart>
	</DashboardBlock>
}

BandwidthUsage.defaultProps = { usageHistory: [] }

BandwidthUsage.propTypes = {
	data: PropTypes.arrayOf( PropTypes.shape( {
		usage: PropTypes.number,
		date:  PropTypes.string,
	} ) ),
	loading: PropTypes.boolean,
}

export default BandwidthUsage;
