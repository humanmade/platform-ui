import React, { Fragment } from 'react';
import Header from '../Header';
import PostsContainer from  './PostsContainer';
import SiteStats from "./SiteStats";
import SupportRequests from "./SupportRequests";
import NewsContainer from "./NewsContainer";
import "../../assets/css/react-grid-layout-styles.css";
import "../../assets/css/react-resizable-styles.css";
import GridLayout from 'react-grid-layout';

class Dashboard extends React.Component {
	render() {
		const layout = [
			{i: 'a', x: 0, y: 0, w: 12, h: 14, minW: 6, maxW: 12},
			{i: 'b', x: 0, y: 0, w: 12, h: 18, minW: 6, maxW: 12},
			{i: 'c', x: 0, y: 0, w: 6, h: 14, minW: 6, maxW: 12},
			{i: 'd', x: 6, y: 6, w: 6, h: 14, minW: 6, maxW: 12}
		];
		return (
			<Fragment>
				<Header key="header" title="Dashboard" />
				<GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
					<div key="a"><SiteStats /></div>
					<div key="b"><PostsContainer /></div>
					<div key="c"><SupportRequests /></div>
					<div key="d"><NewsContainer /></div>
				</GridLayout>
			</Fragment>
		);
	}
}

export default Dashboard;
