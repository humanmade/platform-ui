import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './components/Main';
import Toolbar from './components/Toolbar';
import AdminPortal from './portal';

class App extends Component {
	render() {
		return [
			<AdminPortal key="menu" target="toplevel_page_hm-platform">
				<HashRouter>
					<Menu/>
				</HashRouter>
			</AdminPortal>,
			<AdminPortal key="main" target="hm-platform">
				<HashRouter>
					<Main/>
				</HashRouter>
			</AdminPortal>,
			<AdminPortal key="toolbar" target="wp-admin-bar-hm-platform-toolbar-ui">
				<HashRouter>
					<Toolbar/>
				</HashRouter>
			</AdminPortal>
		];
	}
}

export default App;
