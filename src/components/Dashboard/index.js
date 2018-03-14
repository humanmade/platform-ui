import React, {Fragment} from 'react';
import Posts from  './Posts';
import Header from '../Header';
import SiteStats from "./SiteStats";
import SupportRequests from "./SupportRequests";
import NewsFeed from "./NewsFeed";

class Dashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Dashboard" />
				<div className="dashboard">
					<SiteStats />
					<Posts />
					<SupportRequests />
					<NewsFeed />
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;
