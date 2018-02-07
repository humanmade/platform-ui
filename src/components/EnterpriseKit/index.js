/*global HM*/
import React from 'react';
import Header from '../Header';
import Dismissable from '../Dismissable';
import Plugins from './Plugins';

class EnterpriseKit extends React.Component {
	render() {
		return [
			<Header key="header" title="Enterprise Kit"/>,
			<Dismissable key="description" name="ek-description">
				<h3>The ultimate toolbox for Enterprise</h3>
				<p>Enterprise Kit solves your hardest problems so your team
					can focus on delivering an optimal experience without
					reinventing the wheel. Explore the features available to
					you below and find out how to make them work for you.</p>
			</Dismissable>,
			<Plugins key="plugins" plugins={ HM.EnterpriseKit.Config } />
		];
	}
}

export default EnterpriseKit;
