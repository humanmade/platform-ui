/*global HM*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-small-red.svg';

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
				<div className="wp-menu-image dashicons-before">
					<Logo className="hm-logo-small" title="Human Made Logo" />
				</div>
				<div className="wp-menu-name">Platform</div>
			</NavLink>,
			<ul key="submenu" className="wp-submenu wp-submenu-wrap">
				{ HM.Pages.map( page => <li key={page.path}>
					<NavLink exact={page.exact} to={page.path} activeClassName="current">{page.title}</NavLink>
				</li> ) }
			</ul>
		];
	}
}

export default Menu;
