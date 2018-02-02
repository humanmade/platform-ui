import React from 'react';

const Plugin = props => <div className="hm-plugins--plugin">
	{ props.data.title }
	{ ' ' }
	{ props.config.enabled ? 'On' : 'Off' }
</div>;

export default Plugin;
