/*global HM*/
import React, { Component } from 'react';
import Logo from '../assets/logo-red.svg';

class Header extends Component {

	render() {
		return <div className="hm-ek-Header">
			<h1>
				<Logo className="hm-logo-large" title="Human Made" />
				{ this.props.title || 'Platform' }
				{ ' ' }
				<small className="hm-ek-Header-Version">v{ HM.UI.EnterpriseKit.Version }</small>
			</h1>
			{ this.props.children }
		</div>;
	}
}

export default Header;
