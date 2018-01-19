/* global HM */
import withFetch from './withFetch';

/**
 * Fetch data from the local REST API, with credentials.
 *
 * Call withFetch(), with the API credentials passed in, and destructures the
 * response for ease of using API data in the wrapped component.
 */
const withApiFetch = ( endpoint, options = {}, name = null ) => {

	const url = `${HM.UI.REST.URL}${endpoint}`;
	options.credentials = 'same-origin';
	options.headers = { 'X-WP-Nonce': HM.UI.REST.Nonce }

	return withFetch( url, options, name );
}

export default withApiFetch;
