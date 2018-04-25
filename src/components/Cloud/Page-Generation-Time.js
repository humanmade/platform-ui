import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withApiFetch from '../../utils/withApiFetch';
import { compose } from 'recompose';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';

import DashboardBlock from '../Dashboard-Block';
import { adminTheme } from '../../victory-theme';

/**
 * Display daily average page generation time for a rolling month period.
 *
 * @param {Boolean} loading Whether data is still fetching or not.
 * @param {Array}   data    An array of server response data for the current site.
 */
const PageGenerationTime = ( { loading, data } ) => {

	console.log( data );

	if ( loading || ! Array.isArray( data ) ) return '';
	const highestTime = data.reduce( ( carry, item ) => { return item.time > carry ? item.time : carry }, 0 );

	return <DashboardBlock title="Page Generation Time" isLoading={ loading }>
		<VictoryChart
			theme={ adminTheme }
			domainPadding={ 10 }
		>
			<VictoryAxis
				dependentAxis
				tickCount={ 5 }
				tickFormat={ y => `${ Number( y ).toFixed( 0 ) } ms` }
			/>
			<VictoryAxis
				label="(Date)"
				tickCount={ 7 }
				tickFormat={ x => { console.log( x); return new Date( x ).getDate(); } }
				style={ { grid: {
						fill: "none",
						stroke: "none",
						pointerEvents: "visible"
					} } }
			/>
			<VictoryLine
				data={ data }
				labels={ datum => {
					if ( datum.time !== highestTime ) {
						return '';
					}

					return `${ datum.time } ms`
				} }
				x="date"
				y="time"
			/>
		</VictoryChart>
	</DashboardBlock>
}

PageGenerationTime.defaultProps = { data: [] }

PageGenerationTime.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.shape( {
			time: PropTypes.number,
			date: PropTypes.string,
		} ) ),
		PropTypes.shape( {
			code: PropTypes.string,
			message: PropTypes.string
		} )
	] ),
	loading: PropTypes.bool
}

const PageGenerationTimeWithData = compose(
	withApiFetch( 'hm-stack/v1/page-generation/' )
)( PageGenerationTime );

export default PageGenerationTimeWithData;
