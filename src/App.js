/*global HM*/
import React, { Component } from 'react';
import { StaticRouter as Router, HashRouter } from 'react-router-dom';
import Main from './components/Main';
import Toolbar from './components/Toolbar';
import AdminPortal from './portal';

/**
 * Wraps a component in a router so we can add links but only
 * use has routing on the main app pages.
 *
 * @todo try a custom navlink component that checks for router context and returns standard link if not hashrouter
 *
 * @param Component
 * @returns Component
 */
const getComponent = Component => {
	if ( window.location.href.indexOf( HM.AdminURL ) === 0 ) {
		return <HashRouter><Component/></HashRouter>;
	}

	return <Router context={{ static: true }}><Component/></Router>;
}

class App extends Component {
	render() {
		return [
			<AdminPortal key="main" target="hm-platform">
				<HashRouter>
					<Main/>
				</HashRouter>
			</AdminPortal>,
			<AdminPortal key="toolbar" target="wp-admin-bar-hm-platform-toolbar-ui">
				{ getComponent( Toolbar ) }
			</AdminPortal>
		];
	}
}

export default App;
