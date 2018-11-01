import React from 'react';
import { Link } from 'react-router-dom';

import DashboardBlock from '../Dashboard-Block';

/**
 * Support
 */
const Support = () => (
	<DashboardBlock title="Support">
		<p>For hosting related support questions email us at <a href="mailto:hosting@humanmade.com">hosting@humanmade.com</a>.</p>
		<p>You can also check out the <Link to="/documentation">documentation</Link> and search for answers to your questions there.</p>
	</DashboardBlock>
);

export default Support;
