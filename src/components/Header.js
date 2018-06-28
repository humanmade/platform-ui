/*global HM*/
import React, { Component } from 'react';
import Logo from '../assets/logo-red.svg';

class Header extends Component {

	render() {
		return <div className="hm-platform-ui__Header">
			<h1>
				<Logo className="hm-platform-ui__Header__Logo" title="Human Made" />
				{ ' ' }
				<span className="hm-platform-ui__Header__Title">{ this.props.title || 'Platform' }</span>
				{ ' ' }
				<small className="hm-platform-ui__Header__Version">v{ HM.UI.EnterpriseKit.Version }</small>
			</h1>
			{ this.props.children }
		</div>;
	}
}

export default Header;
