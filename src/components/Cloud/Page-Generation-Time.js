import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

import orWpError from '../../utils/wp-error';
import { withData } from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';

/**
 * Display daily average page generation time for a rolling month period.
 *
 * @param {Boolean} loading Whether data is still fetching or not.
 * @param {Array}   data    An array of server response data for the current site.
 */
const PageGenerationTime = ( { data } ) => {

	if ( ! Array.isArray( data ) || ! data.length ) {
		return <p>No data found.</p>;
	}

	/**
	 * Format a label for a time measuments.
	 *
	 * @param {Number} Value, expected in seconds from API.
	 * @return {String} Label, with number formatted in ms.
	 */
	const formatLabels = sec => `${ parseInt( sec * 1000, 10 ) } ms`;

	// Find the highest time value to label peaks on the graph.
	const highestTime = data.reduce( ( acc, datum ) => datum.value > acc ? datum.value : acc, 0 );

	return (
		<VictoryChart theme={ adminTheme } domainPadding={ 10 }>
			<VictoryAxis
				dependentAxis
				tickCount={ 5 }
				tickFormat={ formatLabels }
			/>
			<VictoryAxis
				label="(Date)"
				tickCount={ 7 }
				tickFormat={ x => new Date( x ).getDate() }
				style={ { grid: {
						fill: "none",
						stroke: "none",
						pointerEvents: "visible"
					} } }
			/>
			<VictoryLine
				data={ data }
				labels={ datum => datum.value > ( highestTime * .8 ) ? formatLabels( datum.value ) : '' }
				x="date"
				y="value"
			/>
		</VictoryChart>
	);
}

PageGenerationTime.defaultProps = { data: [] }

PageGenerationTime.propTypes = {
	data: orWpError(
		PropTypes.arrayOf(
			PropTypes.shape( {
				date: PropTypes.string,
				value: PropTypes.number,
				unit: PropTypes.string
			} )
		),
	),
	loading: PropTypes.bool
};

const PageGenerationTimeWithData = withData( {
	url: 'hm-stack/v1/page-generation/',
	id: 'cloud-page-gen-time-block',
	title: 'Page Generation Time',
} )( PageGenerationTime );

export default PageGenerationTimeWithData;
