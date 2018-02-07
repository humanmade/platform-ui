import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AdminPortal from '../portal';
import Menu from './Menu';
import Header from './Header';
import EnterpriseKit from './EnterpriseKit';
import Documentation from './Documentation';
import Privacy from './Privacy';

class Main extends Component {

	render() {
		return <HashRouter>
			<div id="hm-enterprise-kit-ui">
				<AdminPortal target="toplevel_page_hm-platform">
					<Menu />
				</AdminPortal>
				<Route exact path="/" render={() => <Header/>} />
				<Route path="/ek" component={EnterpriseKit} />
				<Route path="/cloud" render={() => <Header title="Cloud"/>} />
				<Route path="/documentation" component={Documentation} />
				<Route path="/privacy" component={Privacy} />
			</div>
		</HashRouter>;
	}
}

export default Main;
