import React from 'react';
import IframeLink from '../IframeLink';
import icons from './Icons';

const getIcon = tags => {
	return tags.map( tag => {
		const Icon = icons[tag] || false;
		return Icon ? <Icon key={tag} /> : false;
	} ).filter( icon => icon )
}

const Plugin = props => <div className="hm-plugins--plugin">
	<h3>
		{ props.link
			? <IframeLink src={props.link}>{ props.title }</IframeLink>
			: props.title
		}
		{ props.tags && getIcon( props.tags ) }
	</h3>
	<p className={ `hm-plugins--plugin__status ${ props.enabled && 'status-on' }` }>
		<span className="screen-reader-text">Status</span>
		{ props.enabled ? 'On' : 'Off' }
	</p>
	<p className="hm-plugins--plugin__description">{ props.excerpt }</p>
	{ props.guides && <ul className="hm-plugins--plugin__guides">
		{ props.guides.map( guide => <li key={ guide.id }>
			<IframeLink src={ guide.link }>{ guide.title }</IframeLink>
		</li> ) }
	</ul> }
</div>;

export default Plugin;
