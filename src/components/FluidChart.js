import React from 'react';
import { VictoryChart } from 'victory';
import Dimensions from 'react-dimensions';

class FluidChart extends React.Component {
	render() {
		return <VictoryChart
			width={this.props.containerWidth}
			{...this.props}
		>
			{this.props.children}
		</VictoryChart>
	}
}

export default Dimensions()(FluidChart);
