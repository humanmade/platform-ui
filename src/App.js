import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Toolbar from './components/Toolbar';
import AdminPortal from './portal';

class App extends Component {
	render() {
		return <HashRouter>
			<div>
				<AdminPortal target="toplevel_page_hm-platform">
					<Menu/>
				</AdminPortal>
				<AdminPortal target="hm-platform">
					<Main/>
				</AdminPortal>
				<AdminPortal target="wp-admin-bar-hm-platform-toolbar-ui">
					<Toolbar/>
				</AdminPortal>
			</div>
		</HashRouter>;
	}
}

export default App;
