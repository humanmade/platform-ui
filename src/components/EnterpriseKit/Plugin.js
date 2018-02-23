import React from 'react';
import IframeLink from '../IframeLink';
import icons from './Icons';
import ReactHtmlParser from 'react-html-parser';

const getIcons = tags => {
	return tags.map( tag => {
		const Icon = icons[tag] || false;
		return Icon ? <Icon key={tag} /> : false;
	} ).filter( icon => icon )
}

const Plugin = props => <div className="hm-plugins--plugin">
	<h3>
		{ props.link
			? <IframeLink src={props.link} title={ `${ props.title } documentation` }>{ ReactHtmlParser( props.title ) }</IframeLink>
			: props.title
		}
		{ props.tags && <span className="hm-plugins--plugin__icons">{ getIcons( props.tags ) }</span> }
	</h3>
	<p className={ `hm-plugins--plugin__status ${ props.enabled && 'status-on' }` }>
		<span className="screen-reader-text">Status</span>
		{ props.enabled ? 'On' : 'Off' }
	</p>
	<p className="hm-plugins--plugin__description">{ props.excerpt }</p>
	{ props.guides && <ul className="hm-plugins--plugin__guides">
		{ props.guides.map( guide => <li key={ guide.id }>
			<IframeLink src={ guide.link } title={ `${ props.title } ${ guide.title }` }>{ guide.title }</IframeLink>
		</li> ) }
	</ul> }
</div>;

export default Plugin;
