import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import EnterpriseKit from './EnterpriseKit';
import Documentation from './Documentation';
import Privacy from './Privacy';
import Menu from './Menu';
import AdminPortal from '../portal';
import Dashboard from './Dashboard';

class Main extends Component {
	render() {
		return <div id="hm-enterprise-kit-ui">
			<AdminPortal key="menu" target="toplevel_page_hm-platform">
				<HashRouter>
					<Menu/>
				</HashRouter>
			</AdminPortal>
			<Route exact path="/" render={() => <Dashboard/>} />
			<Route path="/ek" component={EnterpriseKit} />
			<Route path="/cloud" render={() => <Header title="Cloud"/>} />
			<Route path="/documentation" component={Documentation} />
			<Route path="/privacy" component={Privacy} />
		</div>;
	}
}

export default Main;
