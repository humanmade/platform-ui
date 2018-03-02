import React, {Fragment} from 'react';
import Posts from  './Posts';
import Header from '../Header';

class Dashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Header key="header" title="Dashboard" />
				<Posts title="Posts" />
			</Fragment>

		);
	}
}

export default Dashboard;
