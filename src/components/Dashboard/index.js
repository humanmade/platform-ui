import React, {Fragment} from 'react';
import Posts from  './Posts';
import Header from '../Header';
import SiteStats from "./SiteStats";
import SupportRequests from "./SupportRequests";
import NewsFeed from "./NewsFeed";

const DashboardContext = React.createContext();

class DashboardProvider extends React.Component {
	state = {}

	render() {
		return (
			<DashboardContext.Provider value={{
				state: this.state
			}}>
				{this.props.children}
			</DashboardContext.Provider>
		)
	}
}

class Dashboard extends React.Component {
	render() {
		return (
			<DashboardProvider>
				<Fragment>
					<Header key="header" title="Dashboard" />
					<div className="dashboard">
						<SiteStats />
						<Posts />
						<SupportRequests />
						<NewsFeed />
					</div>
				</Fragment>
			</DashboardProvider>
		);
	}
}

export default Dashboard;
