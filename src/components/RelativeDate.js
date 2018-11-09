import React from 'react';
import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';

export default function RelativeDate( { className, date } ) {
	const parsedDate = new Date( date );
	const dateTime = parsedDate.toISOString();
	const dateString = distanceInWordsToNow( parsedDate, { addSuffix: true } );

	return <time className={ className } dateTime={ dateTime }>{ dateString }</time>;
}

RelativeDate.defaultProps = {
	className: '',
};

RelativeDate.propTypes = {
	className: PropTypes.string,
	date: PropTypes.string.isRequired,
};
