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
const DeployItem = props => {
	const { description, date, status, user } = props;
	const { avatar_urls, name } = user;
	const avatarSize = Number( Object.keys( avatar_urls )[0] );

	return (
		<li className="deploy-item">
			<h3 className="deploy-item__title">{ description }</h3>
			<p className="deploy-item__meta">
				<StatusIndicator className="deploy-item__meta__status" status={ status }>{ status }</StatusIndicator>
				<RelativeDate className="deploy-item__meta__date" date={ date } />
			</p>
			<img className="deploy-item__avatar" src={ avatar_urls[ avatarSize ] } alt={ name } />
		</li>
	);
};

export const propTypes = {
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	rev: PropTypes.string.isRequired,
	wordpress_version: PropTypes.string.isRequired,
	user: PropTypes.shape( {
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	} ).isRequired,
};

DeployItem.propTypes = propTypes;

export default DeployItem;
