import React from 'react';
import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';

import StatusIndicator from '../StatusIndicator';

/**
 * Display status about a single Pull Request.
 *
 * @param {String} date       Date that the pull request was opened.
 * @param {Number} id         GitHub Pull Request identifier.
 * @param {String} link       Link to the pull request on GitHub.
 * @param {String} status     Un-mapped status of the pull request
 * @param {String} statusText Formatted string describing the current status of the pull request,
 * @param {String} title      Title of the pull request.
 */
const PullRequestItem = ( { date, id, link, status, title } ) => {
	const parsedDate = new Date( date );
	const dateTime = parsedDate.toISOString();
	const dateString = distanceInWordsToNow( parsedDate, { addSuffix: true } );

	return <li className="pull-request-item">
		<div className="pull-request-item__info" >
			<h3 className="pull-request-item__title">
				<a href={ link }>#{ id }</a> <strong>{ title }</strong>
			</h3>
			<time datetime={ dateTime } className="pull-request-item__date">{ dateString }</time>
		</div>
		<StatusIndicator
			className="pull-request-item__status"
			status={ 'commented' }
		>
			{ status }
		</StatusIndicator>
	</li>
}

PullRequestItem.defaultProps = {};

PullRequestItem.propTypes = {
	date:       PropTypes.string,
	id:         PropTypes.number,
	link:       PropTypes.string,
	status:     PropTypes.string,
	statusText: PropTypes.string,
	title:      PropTypes.string,
};

export default PullRequestItem;
