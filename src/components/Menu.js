/*global HM*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-small-white.svg';

class Menu extends Component {
	componentDidMount() {
		if ( window._wpColorScheme && window._wpColorScheme.icons && window._wpColorScheme.icons.current ) {
			this.refs.svg.querySelector( '.hm-logo-path' ).setAttribute( 'fill', window._wpColorScheme.icons.current );
		}
	}

	render() {
		return [
			<NavLink
				key="main-link"
				to="/"
				className="wp-has-current-submenu menu-top toplevel_page_hm-enterprise-kit"
				activeClassName="current"
			>
				<div className="wp-menu-arrow">
					<div/>
				</div>
				<div className="wp-menu-image" ref="svg">
					<Logo className="hm-logo-small" title="Human Made" />
				</div>
				<div className="wp-menu-name">Platform</div>
			</NavLink>,
			<ul key="submenu" className="wp-submenu wp-submenu-wrap">
				{HM.UI.Pages.map( page => <li key={page.path}>
					<NavLink exact={page.exact} to={page.path} activeClassName="current">{page.title}</NavLink>
				</li> )}
			</ul>
		];
	}
}

export default Menu;
