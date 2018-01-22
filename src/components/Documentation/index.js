/*global HM*/
import React from 'react';

class Documentation extends React.Component {

	componentDidMount() {
		this.frame = document.getElementById( 'hm-docs-site' );
		window.addEventListener( "message", this.handleEvent, false );
	}

	componentWillUnmount() {
		window.removeEventListener( "message", this.handleEvent, false );
	}

	frameLoad() {
		this.frame.contentWindow.postMessage( {
			event:       "docs-site-embed",
			origin:      window.location.hostname,
			version:     HM.EnterpriseKit.DocsVersion,
			environment: HM.Environment,
			config:      {},
		}, HM.EnterpriseKit.DocsURL );
	}

	handleEvent( event ) {
		let { data, origin } = event;

		if ( ! origin.match( HM.EnterpriseKit.DocsURL ) ) {
			return;
		}

		if ( ! data || ! data.event ) {
			return;
		}

		if ( data.event && data.event === 'location' ) {
			// Update router hash
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
			className="hm-platform-full-embed"
			onLoad={() => this.frameLoad()}
			src={`${HM.EnterpriseKit.DocsURL}/${HM.EnterpriseKit.DocsVersion}${frameURL}/?admin-request=full`}
		/>;
	}
}

export default Documentation;
