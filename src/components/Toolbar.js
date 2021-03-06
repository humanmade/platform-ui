/*global HM*/
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Logo from '../assets/logo-small-red.svg';
import DocsIndicator from './Toolbar/DocsIndicator';
import DocsLinks from './Toolbar/DocsLinks';

injectGlobal`
#wpadminbar {
	#wp-admin-bar-hm-platform-toolbar-ui {
		.hm-platform-ui-toolbar-docs-indicator {
		  margin-left:  5px;
		  border-left:  1px solid rgba(255, 255, 255, .3);
		  padding-left: 10px;
		}

		.hm-platform-ui-toolbar-logo-small {
		  max-width:      24px;
		  width:          auto;
		  vertical-align: text-bottom;
		  height:         auto;
		  display:        inline-block;
		}

	  .ab-submenu-header {
	    margin-top: -6px;
	    border-top:  1px solid rgba(255, 255, 255, .3);
	    font-weight: bold;
	    padding:     0;
	  }
  }

  .ab-top-menu > #wp-admin-bar-hm-platform-toolbar-ui.menupop > .ab-sub-wrapper {
    min-width: 150%;
  }
}
`

class Toolbar extends Component {
	render() {
		return [
			<a key="link" className="ab-item" href={ HM.UI.AdminURL + '#/' }>
				<Logo className="hm-platform-ui-toolbar-logo-small" title="Human Made" />
				{ ' ' }
				Quick links
				{ ' ' }
				<DocsIndicator/>
			</a>,
			<div key="submenu" className="ab-sub-wrapper">
				<ul className="ab-submenu">
					<li><a className="ab-item">Environment: <strong>{ HM.UI.Environment.type }</strong></a></li>
				</ul>
				<DocsLinks/>
			</div>
		];
	}
}

export default Toolbar;
