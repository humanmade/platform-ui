/*global HM*/
import React from 'react';

class Documentation extends React.Component {

	componentDidMount() {
		window.addEventListener( "message", this.handleFrameMessage );
	}

	componentWillUnmount() {
		window.removeEventListener( "message", this.handleFrameMessage );
	}

	/**
	 * Runs every time the iframe is loaded, that includes navigation
	 * events within the frame.
	 */
	onFrameLoad() {
		this.refs.iframe.contentWindow.postMessage( {
			event:       "docs-site-embed",
			origin:      window.location.hostname,
			version:     HM.UI.EnterpriseKit.DocsVersion,
			environment: HM.UI.Environment,
			user:        HM.UI.User,
			config:      HM.UI.Config,
			plugins:     HM.UI.EnterpriseKit.Config,
		}, HM.UI.EnterpriseKit.DocsURL );
	}

	/**
	 * Handler for postMessages sent from the iframe.
	 *
	 * @param {Object} event
	 */
	handleFrameMessage( event ) {
		let { data, origin } = event;

		if ( ! origin.match( HM.UI.EnterpriseKit.DocsURL ) ) {
			return;
		}

		if ( ! data || ! data.event ) {
			return;
		}

		if ( data.event && data.event === 'location' ) {
			// Update router hash so history reflects the current iframe URL.
			window.history.replaceState(
				{},
				document.title,
				window.location.href.replace( window.location.hash, `#/documentation${data.location}` )
			);
		}
	}

	render() {
		let frameURL  = '',
				framePath = window.location.hash.match( /documentation\/[^/]+(\/.+?)\/?$/ );

		// If there's a hash path already for docs determine the URL we need.
		if ( framePath ) {
			frameURL = framePath[1];
		}

		return <iframe
			title="HM Platform Documentation"
			id="hm-docs-site"
			ref="iframe"
			className="hm-platform-ui-full-embed"
			onLoad={() => this.onFrameLoad()}
			src={`${HM.UI.EnterpriseKit.DocsURL}/${HM.UI.EnterpriseKit.DocsVersion}${frameURL}/?admin-request=full`}
		/>;
	}
}

export default Documentation;
