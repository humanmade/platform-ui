import PropTypes from 'prop-types';

/**
 * A PropTypes matcher for a WP_Error response returned by API endpoints.
 *
 */
export const wpErrorShape = PropTypes.shape({
	code: PropTypes.string,
	message: PropTypes.string,
	data: PropTypes.any
});

/**
 * A PropTypes wrapper for data returned by withApiFetch, which can also return a WP_Error object
 *
 */
export const orWpError = dataShape => PropTypes.oneOfType([
	dataShape,
	wpErrorShape
]);

export default orWpError;
