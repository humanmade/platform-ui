import 'whatwg-fetch';
import React from 'react';
import sh from 'shorthash';

/**
 * Fetch HoC using localStorage.
 */
const withFetch = ( url, options = {}, name = null ) => {
	// Store key.
	const key = `${url}:${sh.unique(JSON.stringify(options))}`;
	// HoC.
	return Component => {
		class fetchComponent extends React.Component {
			constructor() {
				super();

				// eslint-disable-next-line
				this.state = {
					loading:  true,  // Initial load indicator.
					fetching: false, // Refetch indicator.
					expires:  0,
					data:     {},
					error:    false,
				};
			}

			componentWillMount() {
				const item = this.getStore();
				if ( item ) {
					this.setState( item );
				}
			}

			componentDidMount() {
				if ( this.state.expires > Date.now() ) {
					return;
				}

				this.setState( { loading: true } );
				this.doFetch();
			}

			doFetch( overrides = {} ) {
				this.setState( { fetching: true } );
				fetch( url, Object.assign( {}, options, overrides ) )
					.then( response => response.json() )
					.then( data => this.updateStore( data ) )
					.catch( error => this.updateStore( {}, error ) );
			}

			getStore() {
				const store = JSON.parse( window.localStorage.getItem( `withFetch(${key})` ) );
				return store || null;
			}

			updateStore( data, error = false ) {
				const update = {
					data,
					error,
					loading: false,
					fetching: false,
					expires: Date.now() + ( options.expires || ( 5 * 60 * 1000 ) ) // 5 minutes.
				};

				// Add a timeout to update the data after expiry time.
				if ( options.expires && ! error ) {
					setTimeout( this.doFetch, parseInt( options.expires, 10 ) )
				}

				// Update store.
				const store = JSON.parse( window.localStorage.getItem( `withFetch(${key})` ) );
				window.localStorage.setItem( `withFetch(${key})`, JSON.stringify( Object.assign( store || {}, update ) ) );

				// Update state.
				this.setState( update );
			}

			render() {
				let state = Object.assign( {}, this.state, {
					refetch: ( overrides = {} ) => this.doFetch( overrides ),
				} );

				// Add state under named prop if set.
				if ( name ) {
					state = { [name]: state };
				}

				return <Component {...state} {...this.props} />;
			}
		}

		// Set a nice display name.
		fetchComponent.displayName = `withFetch(${url})(${Component.displayName || Component.name || 'Component'})`;

		return fetchComponent;
	}
}

export default withFetch;
