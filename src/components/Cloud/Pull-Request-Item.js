import React from 'react';
import PropTypes from 'prop-types';

import RelativeDate from '../RelativeDate';
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
const PullRequestItem = ( { date, id, link, status, title } ) => (
	<li className="pull-request-item">
		<div className="pull-request-item__info" >
			<h3 className="pull-request-item__title">
				<a href={ link }>#{ id }</a><br />
				<strong>{ title }</strong>
			</h3>
			<div className="pull-request-item__meta">
				<StatusIndicator
					className="pull-request-item__status"
					status={ 'commented' }
				>
					{ status }
				</StatusIndicator>
				<RelativeDate className="pull-request-item__date" date={ date } />
			</div>
		</div>
	</li>
);

PullRequestItem.defaultProps = {};

PullRequestItem.propTypes = {
	date:       PropTypes.string,
	id:         PropTypes.string,
	link:       PropTypes.string,
	status:     PropTypes.string,
	statusText: PropTypes.string,
	title:      PropTypes.string,
};

export default PullRequestItem;
