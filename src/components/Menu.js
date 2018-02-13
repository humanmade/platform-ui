/*global HM*/
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from '../assets/logo-small-red.svg';

const logoImageStyle = {
	backgroundImage: `url(data:image/svg+xml;base64,${
		btoa( ReactDOMServer.renderToStaticMarkup(<Logo className="hm-logo-small" title="Human Made Logo" />) )
	})`
};

const isActive = (match, location) => {
	console.log(match, location, window.location);
	return match;
}

class Menu extends Component {
	// constructor() {
	// 	super();
	//
	// 	this.state = {
	// 		current: window.location.hash.substr( 1 )
	// 	};
	//
	// 	// this.onHashChange = this.onHashChange.bind( this );
	// }

	// onHashChange( e ) {
	// 	console.log( e, this.state )
	// 	this.setState( { current: window.location.hash.substr( 1 ) } );
	// }
	//
	// componentWillMount() {
	// 	this.onHashChange();
	// 	window.addEventListener( 'hashchange', this.onHashChange, false );
	// }
	//
	// componentWillUnmount() {
	// 	window.removeEventListener( 'hashchange', this.onHashChange );
	// }

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
				{ HM.Pages.map( page => <li key={page.path}>
					<NavLink exact={page.exact} to={page.path} activeClassName="current">{page.title}</NavLink>
				</li> ) }
			</ul>
		];
	}
}

export default Menu;
