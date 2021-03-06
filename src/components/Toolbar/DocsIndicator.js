/*global HM*/
import React from 'react';
import withFetch from '../../utils/withFetch';
import { getDocsForURL } from '../../utils';
import Spinner from '../Spinner';

export class DocsIndicator extends React.Component {
	render() {
		if ( this.props.loading ) {
			return <Spinner />;
		}

		if ( ! this.props.data || ! this.props.data.results ) {
			// @todo flag an error state, error boundary in outer app? modal?
			return null;
		}

		const docs = getDocsForURL( this.props.data.results );

		if ( ! docs.length ) {
			return null;
		}

		return <span className="hm-platform-ui-toolbar-docs-indicator">
			<span>{ docs.length }</span> Guides
		</span>;
	}
}

const EnhancedDocsIndicator = withFetch(
	`${HM.UI.EnterpriseKit.DocsURL}/wp-json/docs/v1/guides?version=${HM.UI.EnterpriseKit.DocsVersion}`
)( DocsIndicator );

export default EnhancedDocsIndicator;
