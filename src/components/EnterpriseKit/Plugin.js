import React from 'react';
import IframeLink from '../IframeLink';
import icons from './Icons';

const getIcon = category => {
	const Icon = icons[category] || 'span';
	return <Icon />;
}

const Plugin = props => <div className="hm-plugins--plugin">
	<h3>
		{ props.data.link
			? <IframeLink src={props.data.link}>{ props.data.title }</IframeLink>
			: props.data.title
		}
		{ getIcon( props.data.category ) }
	</h3>
	<p className={ `hm-plugins--plugin__status ${ props.config.enabled && 'status-on' }` }>
		<span className="screen-reader-text">Status</span>
		{ props.config.enabled ? 'On' : 'Off' }
	</p>
	<p className="hm-plugins--plugin__description">{ props.data.excerpt || props.data.description }</p>
	{ props.data.guides && <ul className="hm-plugins--plugin__guides">
		{ props.data.guides.map( guide => <li key={ guide.id }>
			<IframeLink src={ guide.link }>{ guide.title }</IframeLink>
		</li> ) }
	</ul> }
</div>;

export default Plugin;
