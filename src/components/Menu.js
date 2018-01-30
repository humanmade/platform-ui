import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-small-red.svg';

const logoImageStyle = {
	backgroundImage: `url(data:image/svg+xml;base64,${
		btoa( ReactDOMServer.renderToStaticMarkup(<Logo className="hm-logo-small" title="Human Made Logo" />) )
	})`
};

class Menu extends Component {
	render() {
		return [
			<NavLink
				key="main-link"
				to="/"
				className="menu-top toplevel_page_hm-enterprise-kit"
				activeClassName="current"
			>
				<div className="wp-menu-arrow"><div /></div>
				<div className="wp-menu-image svg" style={logoImageStyle} />
				<div className="wp-menu-name">Platform</div>
			</NavLink>,
			<ul key="submenu" className="wp-submenu wp-submenu-wrap">
				<li><NavLink exact to="/" activeClassName="current">Dashboard</NavLink></li>
				<li><NavLink to="/ek" activeClassName="current">Enterprise Kit</NavLink></li>
				<li><NavLink to="/cloud" activeClassName="current">Cloud</NavLink></li>
				<li><NavLink to="/documentation" activeClassName="current">Documentation</NavLink></li>
				<li><NavLink to="/privacy" activeClassName="current">Privacy</NavLink></li>
			</ul>
		];
	}
}

export default Menu;
