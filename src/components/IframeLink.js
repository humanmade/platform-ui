/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import AdminPortal from '../portal';

class IframeLink extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			show:    false,
			loading: true,
		};

		this.handleFrameMessage = this.handleFrameMessage.bind( this );
		this.onClose = this.onClose.bind( this );
	}

	onOpen( event ) {
		event && event.preventDefault();

		// Store activeElement.
		this.activeElement = document.activeElement;

		// Listen for post messages and mount the iframe.
		window.addEventListener( "message", this.handleFrameMessage );
		this.setState( { show: true } );
		this.props.onOpen && this.props.onOpen();
	}

	onClose( event ) {
		event && event.preventDefault();

		// Stop listening for post messages and unmount the iframe.
		window.removeEventListener( "message", this.handleFrameMessage );
		this.setState( { show: false } );
		this.props.onClose && this.props.onClose();

		// Restore activeElement.
		this.activeElement && this.activeElement.focus();
	}

	/**
	 * Runs every time the iframe is loaded, that includes navigation
	 * events within the frame.
	 */
	onFrameLoad() {
		// Set focus.
		this.iframe.contentWindow.focus();

		// Send data.
		this.iframe.contentWindow.postMessage( {
			event:       "iframe-link-embed",
			origin:      window.location.hostname,
			version:     HM.UI.EnterpriseKit.DocsVersion,
			environment: HM.UI.Environment,
			user:        HM.UI.User,
			config:      HM.UI.Config,
			plugins:     HM.UI.EnterpriseKit.Config,
		}, this.props.src );

		// Listen for interaction outside of iframe & close.
		window.addEventListener( "click", this.onClose, {
			once: true
		} );
	}

	componentDidUpdate() {
		if ( ! this.iframe || ! this.iframe.contentWindow ) {
			return;
		}

		this.iframe.contentWindow.onload = () => this.setState( { loading: false } );
		this.iframe.contentWindow.onunload = () => this.setState( { loading: true } );
	}

	/**
	 * Handler for postMessages sent from the iframe.
	 *
	 * @param {Object} event
	 */
	handleFrameMessage( event ) {
		let { data } = event;

		if ( ! data || ! data.event ) {
			return;
		}

		// Handle resize event from iframe.
		if ( data.event && data.event === 'resize' && data.event.height ) {
			this.iframe.height = data.event.height;
		}

		// Handle close event from iframe.
		if ( data.event && data.event === 'close' ) {
			this.onClose();
		}
	}

	render() {
		const src = this.props.src;

		if ( ! src ) {
			return this.props.children;
		}

		const Open = <a className="hm-platform-ui-iframe-open" key="open" href={src}
		                onClick={e => this.onOpen( e )}>{this.props.children}</a>;
		const Close = <a className="hm-platform-ui-iframe-close btn" key="close" href={src} onClick={e => this.onClose( e )}>Close</a>;

		// Allow a show prop to override state.
		if ( typeof this.props.show !== 'undefined' ) {
			if ( ! this.props.show ) {
				return Open;
			}
		} else {
			if ( ! this.state.show ) {
				return Open;
			}
		}

		return [
			Open,
			<AdminPortal key="iframe" id={src} onUnload={() => this.setState( { loading: true } )}>
				<div className="hm-platform-ui-modal">
					{Close}
					<iframe
						//className={ this.state.loading ? 'hm-platform-ui-iframe-loading' : 'hm-platform-ui-iframe-loaded' }
						src={`${ src }?admin-request=${ this.props.type || 'basic' }`}
						title={this.props.title || ''}
						width="100%"
						height="100%"
						ref={iframe => this.iframe = iframe}
						onLoad={() => this.onFrameLoad()}
					/>
				</div>
			</AdminPortal>
		];
	}

}

IframeLink.instances = [];

IframeLink.propTypes = {
	src:   PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default IframeLink;
