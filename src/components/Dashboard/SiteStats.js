/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';

const SiteStats = props => {
	return (
		<div className="widget widget--site-stats full-width">
			<div className="widget__header">
				<h2 className="widget__header__title">site stats ❯</h2>
				<div className="widget__header__actions">
					<form action="">
						<select name="" id="">
							<option value="">Last 7 days</option>
						</select>
					</form>
				</div>
				<div className="widget__header__settings">

				</div>
			</div>
			<div className="widget__body">
				{/*<div className="widget__notification">*/}
					{/*<p></p>*/}
				{/*</div>*/}
				<div className="toggle">
					<a className="dataset">
						<div>
							<span className="dataset__data">379K</span>
							<span className="dataset__label">users</span>
							<span className="dataset__delta">&uarr; 2.5%</span>
						</div>
					</a>
					<a className="dataset">
						<div>
							<span className="dataset__data">3980</span>
							<span className="dataset__label">sessions</span>
							<span className="dataset__delta">&darr; 0.5%</span>
						</div>
					</a>
					<a className="dataset">
						<div>
							<span className="dataset__data">00:02:58</span>
							<span className="dataset__label">session duration</span>
							<span className="dataset__delta">&uarr; 1.5%</span>
						</div>
					</a>
					<a className="dataset">
						<div>
							<span className="dataset__data">39.08%</span>
							<span className="dataset__label">bounce rate</span>
							<span className="dataset__delta">&uarr; 2.5%</span>
						</div>
					</a>
				</div>
				<div className="chart">
					CHART HERE
				</div>
			</div>
		</div>

	);
}

export default SiteStats;
