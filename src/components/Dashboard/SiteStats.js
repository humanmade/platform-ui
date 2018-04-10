import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { adminTheme } from '../../victory-theme';
import { WidgetContainer, WidgetHeader, WidgetBody, WidgetControls, WidgetSettings } from './Widget';

const SiteStats = props => {
	return (
		<WidgetContainer name="site-stats">
			<WidgetHeader title="site stats">
				<WidgetControls>
					<form action="">
						<select className="Select" name="" id="">
							<option value="">Last 7 days</option>
						</select>
					</form>
				</WidgetControls>
				<WidgetSettings>
					<span>Settings</span>
				</WidgetSettings>
			</WidgetHeader>
			<WidgetBody>
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
			</WidgetBody>
		</WidgetContainer>
	);
}

export default SiteStats;
