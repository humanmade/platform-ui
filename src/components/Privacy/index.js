/*global HM*/
import React from 'react';
import Header from '../Header';

class Privacy extends React.Component {

	constructor() {
		super();

		this.state = {
			optout: false,
		};
	}

	/**
	 * Fetches the current optout setting.
	 */
	componentWillMount() {
		fetch( `${HM.UI.REST.URL}wp/v2/settings`, {
			credentials: "same-origin",
			headers: {
				'X-WP-Nonce': HM.UI.REST.Nonce,
			}
		} )
			.then( response => response.json() )
			.then( data => this.setState( { optout: !!data.hm_analytics_optout } ) );
	}

	/**
	 * Controls the opt out checkbox.
	 *
	 * @param {Object} event
	 */
	toggleOptout( event ) {
		// Optimistic UI update.
		this.setState( { optout: event.target.checked } );

		// Update optout setting.
		fetch( `${HM.UI.REST.URL}wp/v2/settings`, {
			credentials: "same-origin",
			method: 'PATCH',
			headers: {
				'X-WP-Nonce': HM.UI.REST.Nonce,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( {
				hm_analytics_optout: event.target.checked
			} )
		} )
			.then( response => response.json() )
			.then( data => this.setState( { optout: !!data.hm_analytics_optout } ) );
	}

	render() {
		return [
			<Header key="header" title="Privacy" />,
			<div key="body">
				<p className="intro">We are always trying to improve HM Platform and to
					achieve that we gather anonymized usage data. You can opt out in the
					following ways:</p>
				<ol>
					<li>
						<label>
							<input disabled={HM.UI.Analytics.OptoutBy === 'code'} checked={this.state.optout} type="checkbox" name="hm-optout" id="hm-optout" onChange={event => this.toggleOptout( event )} />
							Check this box to opt out
						</label>
					</li>
					<li>
						Add <code>define( 'HM_ANALYTICS_OPTOUT', true );</code> to your config
						file.
						{ HM.UI.Analytics.OptoutBy === 'code' && <span>
							Currently defined as {JSON.stringify(HM.UI.Analytics.Optout)}.
						</span> }
					</li>
				</ol>
				<section>
					<h2>What data do we collect?</h2>
					<ul>
						<li>
							<h3>An anonymous user ID</h3>
							<p>We use this to follow a user journey through the admin and the
								documentation website to help build up a picture of what's
								working and what isn't.</p>
						</li>
						<li>
							<h3>What HM Platform links have been clicked</h3>
							<p>This includes clicks in the embedded documentation and helps
								us discover whether features are being used or overlooked.</p>
						</li>
						<li>
							<h3>The version of HM Platform being run</h3>
							<p>This is crucial for us to know where to focus our efforts based
								on the user journeys we observe.</p>
						</li>
						<li>
							<h3>Your current config</h3>
							<p>This includes what features are active on this site ands helps
								us identify popular features and conversely features that are
								rarely if ever used.</p>
							<p>Knowing this helps us in our ongoing review of what goes in
								to HM Platform and what's really providing value to you so
								we can focus our efforts in the right places.</p>
						</li>
					</ul>
				</section>
			</div>
		];
	}
}

export default Privacy;
