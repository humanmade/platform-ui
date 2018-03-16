import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';
import '../index.css';
import AdminPortal from '../portal';
import Header from './Header';
import Menu from './Menu';

// Pages.
const AsyncEnterpriseKit = Loadable( {
	loader: () => import('./EnterpriseKit'),
	loading: Loading
} );

const AsyncDocumentation = Loadable( {
	loader: () => import('./Documentation'),
	loading: Loading
} );

class Main extends Component {
	render() {
		return <div id="hm-enterprise-kit-ui">
			<AdminPortal key="menu" target="toplevel_page_hm-platform">
				<HashRouter>
					<Menu/>
				</HashRouter>
			</AdminPortal>
			<Route exact path="/" render={() => <Header/>} />
			<Route path="/ek" component={AsyncEnterpriseKit} />
			<Route path="/documentation" component={AsyncDocumentation} />
		</div>;
	}
}

export default Main;
