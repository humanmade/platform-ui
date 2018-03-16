/*global HM*/
import React, { Component } from 'react';
import { StaticRouter as Router, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import Toolbar from './components/Toolbar';
import AdminPortal from './portal';
// import Main from './components/Main';

/**
 * Split the Main component so we only load that code when necessary.
 */
const AsyncMain = Loadable( {
	loader: () => import('./components/Main'),
	loading: Loading
} );

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
	if ( window.location.href.indexOf( HM.UI.AdminURL ) === 0 ) {
		return <HashRouter><Component/></HashRouter>;
	}

	return <Router context={{ static: true }}><Component/></Router>;
}

class App extends Component {
	render() {
		return [
			<AdminPortal key="toolbar" target="wp-admin-bar-hm-platform-toolbar-ui">
				{ getComponent( Toolbar ) }
			</AdminPortal>,
			<AdminPortal key="main" target="hm-platform">
				<HashRouter>
					<AsyncMain/>
				</HashRouter>
			</AdminPortal>
		];
	}
}

export default App;
