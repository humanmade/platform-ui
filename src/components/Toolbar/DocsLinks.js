/*global HM*/
import React from 'react';
import withFetch from '../../utils/withFetch';
import { getDocsForURL } from '../../utils';
import Spinner from '../Spinner';
import IframeLink from '../IframeLink';

export class DocsLinks extends React.Component {
	render() {
		const { loading, data, error } = this.props;

		const docs = loading || error ? [] : getDocsForURL( data.results );

		return <ul className="ab-submenu ab-sub-secondary hm-docs-links">
			<li className="ab-submenu-header"><a href={`${HM.UI.AdminURL}#/documentation`}>Documentation</a></li>
			{ loading && <li><Spinner /></li> }
			{ ! loading && docs.map( doc => <li key={ doc.id }>
				<IframeLink
					src={ doc.link }
					title={`${ doc.parent } ${ doc.title }`}
					show={ this.state && this.state.active === doc.id }
					onOpen={ () => this.setState( { active: doc.id } ) }
					onClose={ () => this.setState( { active: null } ) }
				>
					{ doc.parent } { doc.title }
				</IframeLink>
			</li> ) }
		</ul>;
	}
}

const EnhancedDocsLinks = withFetch(
	`${HM.UI.EnterpriseKit.DocsURL}/wp-json/docs/v1/guides?version=${HM.UI.EnterpriseKit.DocsVersion}`
)( DocsLinks );

export default EnhancedDocsLinks;
