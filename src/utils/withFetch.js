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
					loading: true,
					expires: 0,
					data:    {},
					error:   false,
				};
			}

			componentWillMount() {
				const item = this.fetchStore();
				if ( item ) {
					this.setState( item );
				}
			}

			componentDidMount() {
				if ( this.state.expires > Date.now() ) {
					return;
				}

				this.setState( { loading: true } );

				fetch( url, options )
					.then( response => response.json() )
					.then( data => this.updateStore( data, false ) )
					.catch( error => this.updateStore( {}, false, error ) );
			}

			fetchStore() {
				const store = JSON.parse( window.localStorage.getItem( 'withFetch' ) );
				return ( store && store[ key ] ) || null;
			}

			updateStore( data, loading = false, error = false ) {
				const update = {
					data,
					loading,
					error,
					expires: Date.now() + ( 5 * 60 * 1000 ) // 5 minutes.
				};

				// Update store.
				const store = JSON.parse( window.localStorage.getItem( 'withFetch' ) );
				window.localStorage.setItem( 'withFetch', JSON.stringify( Object.assign( store || {}, {
					[ key ]: update
				} ) ) );

				// Update state.
				this.setState( update );
			}

			render() {
				let state = Object.assign( {}, this.state );

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
