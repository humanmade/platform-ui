import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AdminPortal from '../portal';
import Menu from './Menu';
import Header from './Header';
import Documentation from './Documentation';

class Main extends Component {

	render() {
		return <HashRouter>
			<div id="hm-enterprise-kit-ui">
				<AdminPortal target="toplevel_page_hm-platform">
					<Menu />
				</AdminPortal>
				<Header />
				<Route exact path="/" render={() => <h2>Dashboard</h2>} />
				<Route path="/ek" render={() => <h2>Enterprise Kit</h2>} />
				<Route path="/cloud" render={() => <h2>Cloud</h2>} />
				<Route path="/documentation" component={Documentation} />
			</div>
		</HashRouter>;
	}
}

export default Main;
