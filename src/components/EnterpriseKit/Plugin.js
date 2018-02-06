import React from 'react';
import IframeLink from '../IframeLink';
import icons from './Icons';

const getIcon = category => {
	const Icon = icons[category] || 'span';
	return <Icon />;
}

const Plugin = props => <div className="hm-plugins--plugin">
	<h3>{ props.data.title } { getIcon( props.data.category ) }</h3>
	<p className={ `hm-plugins--plugin__status ${ props.config.enabled && 'status-on' }` }>
		<span className="screen-reader-text">Status</span>
		{ props.config.enabled ? 'On' : 'Off' }
	</p>
	<p className="hm-plugins--plugin__description">{ props.data.description }</p>
	{ props.guides && <ul className="hm-plugins--plugin__guides">
		{ props.guides.map( guide => <li key={ guide.id }>
			<IframeLink src={ `${ guide.link }?admin-request` }>{ guide.title }</IframeLink>
		</li> ) }
	</ul> }
</div>;

export default Plugin;
