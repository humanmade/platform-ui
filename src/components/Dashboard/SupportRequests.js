import React from 'react';
import { WidgetContainer, WidgetHeader, WidgetBody, WidgetControls, WidgetSettings } from './Widget';

const SupportRequests = props => {
	return <WidgetContainer width="one-half" name="support-requests">
		<WidgetHeader title="support requests">
			<WidgetControls>
				<form>
					<input type="submit" value="+ Add new" />
				</form>
			</WidgetControls>
			<WidgetSettings>
				<span>Settings</span>
			</WidgetSettings>
		</WidgetHeader>
		<WidgetBody>
			<table>
				<tbody>
				<tr className="row support-request">
					<td className="support-request__info">
						<div className="support-request__info__title">
							<a href="">Cant see Google Analytics</a>
						</div>
						<div className="support-request__info__meta">
							<span className="support-request__info__meta__modified">2 days ago</span>
							<span className="support-request__info__meta__byline">by [user]</span>
						</div>
					</td>
					<td className="support-request__status--pending-reply">
						<span className="label">Awaiting reply</span>
					</td>
				</tr>
				<tr className="row support-request">
					<td className="support-request__info">
						<div className="support-request__info__title">
							<a href="">Dashboard is broken</a>
						</div>
						<div className="support-request__info__meta">
							<span className="support-request__info__meta__modified">3 days ago</span>
							<span className="support-request__info__meta__byline">by [user]</span>
						</div>
					</td>
					<td className="support-request__status--in-progress">
						<span className="label">Fix in progress</span>
					</td>
				</tr>
				<tr className="row support-request">
					<td className="support-request__info">
						<div className="support-request__info__title">
							<a href="">SEO integration not working</a>
						</div>
						<div className="support-request__info__meta">
							<span className="support-request__info__meta__modified">4 days ago</span>
							<span className="support-request__info__meta__byline">by [user]</span>
						</div>
					</td>
					<td className="support-request__status--pending-reply">
						<span className="label">Awaiting reply</span>
					</td>
				</tr>
				<tr className="row support-request">
					<td className="support-request__info">
						<div className="support-request__info__title">
							<a href="">Stuck in toilet, send help</a>
						</div>
						<div className="support-request__info__meta">
							<span className="support-request__info__meta__modified">5 days ago</span>
							<span className="support-request__info__meta__byline">by [user]</span>
						</div>
					</td>
					<td className="support-request__status--resolved">
						<span className="label">resolved</span>
					</td>
				</tr>
				<tr className="row support-request">
					<td className="support-request__info">
						<div className="support-request__info__title">
							<a href="">What is the meaning of life?</a>
						</div>
						<div className="support-request__info__meta">
							<span className="support-request__info__meta__modified">7 days ago</span>
							<span className="support-request__info__meta__byline">by [user]</span>
						</div>
					</td>
					<td className="support-request__status--resolved">
						<span className="label">resolved</span>
					</td>
				</tr>
				</tbody>
			</table>
		</WidgetBody>
	</WidgetContainer>
}

export default SupportRequests;
