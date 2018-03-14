/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { adminTheme } from '../../victory-theme';

const SiteStats = props => {
	return (
		<div className="widget widget--site-stats full-width">
			<div className="widget__header">
				<h2 className="widget__header__title">site stats</h2>
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
				<Tabs>
					<TabList>
						<Tab>
							<span className="data">379K</span>
							<span className="type">users</span>
							<span className="delta--up">&uarr; 2.5%</span>
						</Tab>
						<Tab>
							<span className="data">3980</span>
							<span className="type">sessions</span>
							<span className="delta--down">&darr; 0.5%</span>
						</Tab>
						<Tab>
							<span className="data">00:02:58</span>
							<span className="type">session duration</span>
							<span className="delta--up">&uarr; 1.5%</span>
						</Tab>
						<Tab>
							<span className="data">39.08%</span>
							<span className="type">bounce rate</span>
							<span className="delta--up">&uarr; 2.5%</span>
						</Tab>
					</TabList>

					<TabPanel>
						<VictoryChart
							theme={adminTheme}
						>
							<VictoryLine
								style={{
									data: { stroke: "#c43a31" },
									parent: { border: "1px solid #ccc"}
								}}
								data={[
									{ x: "Feb 8", y: 200 },
									{ x: "Feb 9", y: 400 },
									{ x: "Feb 10", y: 600 },
									{ x: "Feb 11", y: 800 },
									{ x: "Feb 12", y: 1000 }
								]}
							/>
						</VictoryChart>
					</TabPanel>
					<TabPanel>
						<VictoryChart
							theme={VictoryTheme.material}
						>
							<VictoryLine
								style={{
									data: { stroke: "#c43a31" },
									parent: { border: "1px solid #ccc"}
								}}
								data={[
									{ x: 1, y: 2 },
									{ x: 2, y: 3 },
									{ x: 3, y: 5 },
									{ x: 4, y: 4 },
									{ x: 5, y: 7 }
								]}
							/>
						</VictoryChart>
					</TabPanel>
					<TabPanel>
						<VictoryChart
							theme={VictoryTheme.material}
						>
							<VictoryLine
								style={{
									data: { stroke: "#c43a31" },
									parent: { border: "1px solid #ccc"}
								}}
								data={[
									{ x: 1, y: 2 },
									{ x: 2, y: 3 },
									{ x: 3, y: 5 },
									{ x: 4, y: 4 },
									{ x: 5, y: 7 }
								]}
							/>
						</VictoryChart>
					</TabPanel>
					<TabPanel>
						<VictoryChart
							theme={VictoryTheme.material}
						>
							<VictoryLine
								style={{
									data: { stroke: "#c43a31" },
									parent: { border: "1px solid #ccc"}
								}}
								data={[
									{ x: 1, y: 2 },
									{ x: 2, y: 3 },
									{ x: 3, y: 5 },
									{ x: 4, y: 4 },
									{ x: 5, y: 7 }
								]}
							/>
						</VictoryChart>
					</TabPanel>
				</Tabs>
			</div>
		</div>

	);
}

export default SiteStats;
