/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';

const SupportRequests = props => {
	return (
		<div className="widget widget--authors one-half">
			<div className="widget__header">
				<h2 className="widget__header__title">support requests ❯</h2>
				<div className="widget__header__actions">
					<form action="">
						<input type="submit" value="+ Add new" />
					</form>
				</div>
				<div className="widget__header__settings">
				</div>
			</div>
			<div className="widget__body">
				<table>
					<tbody>
					<tr className="row support-request">
						<td className="support-request__info">
							<div className="support-request__info__title">
								<a href="#">Cant see Google Analytics</a>
							</div>
							<div className="support-request__info__meta">
								<span className="support-request__info__meta__modified">2 days ago</span>
								<span className="support-request__info__meta__byline">by [user]</span>
							</div>
						</td>
						<td className="support-request__status">
							<span className="label">Awaiting reply</span>
						</td>
					</tr>
					<tr className="row support-request">
						<td className="support-request__info">
							<div className="support-request__info__title">
								<a href="#">Dashboard is broken</a>
							</div>
							<div className="support-request__info__meta">
								<span className="support-request__info__meta__modified">3 days ago</span>
								<span className="support-request__info__meta__byline">by [user]</span>
							</div>
						</td>
						<td className="support-request__status">
							<span className="label">Fix in progress</span>
						</td>
					</tr>
					<tr className="row support-request">
						<td className="support-request__info">
							<div className="support-request__info__title">
								<a href="#">SEO integration not working</a>
							</div>
							<div className="support-request__info__meta">
								<span className="support-request__info__meta__modified">4 days ago</span>
								<span className="support-request__info__meta__byline">by [user]</span>
							</div>
						</td>
						<td className="support-request__status">
							<span className="label">Awaiting reply</span>
						</td>
					</tr>
					<tr className="row support-request">
						<td className="support-request__info">
							<div className="support-request__info__title">
								<a href="#">Stuck in toilet, send help</a>
							</div>
							<div className="support-request__info__meta">
								<span className="support-request__info__meta__modified">5 days ago</span>
								<span className="support-request__info__meta__byline">by [user]</span>
							</div>
						</td>
						<td className="support-request__status">
							<span className="label">resolved</span>
						</td>
					</tr>
					<tr className="row support-request">
						<td className="support-request__info">
							<div className="support-request__info__title">
								<a href="#">What is the meaning of life?</a>
							</div>
							<div className="support-request__info__meta">
								<span className="support-request__info__meta__modified">7 days ago</span>
								<span className="support-request__info__meta__byline">by [user]</span>
							</div>
						</td>
						<td className="support-request__status">
							<span className="label">resolved</span>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>

	);
}

export default SupportRequests;
