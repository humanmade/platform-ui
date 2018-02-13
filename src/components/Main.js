import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import EnterpriseKit from './EnterpriseKit';
import Documentation from './Documentation';
import Privacy from './Privacy';

class Main extends Component {

	render() {
		return <div id="hm-enterprise-kit-ui">
			<Route exact path="/" render={() => <Header/>} />
			<Route path="/ek" component={EnterpriseKit} />
			<Route path="/cloud" render={() => <Header title="Cloud"/>} />
			<Route path="/documentation" component={Documentation} />
			<Route path="/privacy" component={Privacy} />
		</div>;
	}
}

export default Main;
