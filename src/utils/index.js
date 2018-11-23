/**
 * Helper functions that don't need their own file.
 */

// eslint-disable-next-line
Array.prototype.unique = function() {
	return this
		.map( item => JSON.stringify( item ) )
		.reduce( ( result, item ) => {
			if ( result.includes( item ) ) {
				return result;
			}
			result.push( item );
			return result;
		}, [] )
		.map( item => JSON.parse( item ) );
};

/**
 * Get an array of documents for the current URL from the docs site config.
 *
 * @param guides
 * @returns {Array}
 */
export const getDocsForURL = guides => {
	return guides
		.filter( guide => {
			let match = false;
			guide.showOn.forEach( pattern => {
				match = match || window.location.href.match( new RegExp( pattern.replace( /^\/?(.*?)\/?$/, '$1' ) ) );
			} );

			return match;
		} );
}

/**
 * Calculate the amount of time since a date and return in nice English.
 *
 * @param {String} time ISO timestamp
 * @return {String}
 */
export const getTimeSince = time => {
	const now = new Date();
	const then = new Date( time );

	// If we're dealing with the future we don't have a timeSince to parse. Bounce.
	if ( now < then ) {
		return null;
	}

	const diff = Math.floor( now - then );
	const microMinute = 60000; // Minute in microseconds
	const microHour = 3600000; // Hour in microseconds
	const microDay = 86400000; // Day in microseconds.

	if ( diff < microMinute ) {
		return 'just a minute ago';
	} else if ( diff < microHour ) {
		const time = Math.floor( diff / 1000 / 60 );
		return `${ time } minute${ time > 1 ? 's' : ''} ago`;
	} else if ( diff < microDay ) {
		const time = Math.floor( diff / microHour );
		return`${ time } hour${ time > 1 ? 's' : ''} ago`;
	} else if ( diff > microDay && diff < ( microDay * 2 ) ) {
		return 'yesterday';
	} else {
		return `${ Math.floor( diff / microDay ) } days ago`;
	}
};

/**
 * Convert bytes to MB, GB, etc. and return a nicely formatted number.
 *
 * @param {Number} bytes
 * @returns {string}
 */
export const getHumanReadableBytes = ( bytes, maximumFractionDigits = 0 ) => {
	const suffixes = [ 'b', 'KB', 'MB', 'GB', 'TB' ];
	const exp = parseInt( Math.log( bytes ) / Math.log( 1024 ), 10 );

	return Number( bytes / Math.pow( 1024, exp ) ).toLocaleString( undefined, { maximumFractionDigits } ) + ' ' + suffixes[ exp ];
}
