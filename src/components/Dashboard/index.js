import React, { Fragment } from 'react';
import PostsContainer from './PostsContainer';
import Header from '../Header';
import SiteStats from "./SiteStats";
import SupportRequests from "./SupportRequests";
import NewsContainer from "./NewsContainer";

class Dashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Dashboard"/>
				<div className="hm-platform-ui__Dashboard">
					<SiteStats/>
					<PostsContainer/>
					<SupportRequests/>
					<NewsContainer/>
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;
