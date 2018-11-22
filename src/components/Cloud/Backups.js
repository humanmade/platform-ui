import React from 'react';

import { withData } from '../Dashboard-Block';
import { getHumanReadableBytes } from '../../utils';

const buildItems = ( items, count = 5 ) => {
	return items
		.sort( ( a, b ) => {
			if ( a.id > b.id ) {
				return -1;
			}

			if ( a.id < b.id ) {
				return 1;
			}

			return 0;
		} )
		.slice( 0, count );
};

const Backups = ( { data } ) => {
	if ( ! Array.isArray( data ) || ! data.length ) {
		return <p>No backups found.</p>;
	}

	const items = buildItems( data );
	const labels = [ 'database', 'uploads' ];

	return (
		<ul>
			{ items.map( item => (
				<li key={ item.id }>
					<a href={ item.url }>{ item.id }</a>
					<p>
						<span>{ getHumanReadableBytes( item.size ) }</span>
						{ labels.map( label => (
							item[ label ] ? <code>{ label }</code> : null
						) ) }
					</p>
				</li>
			) ) }
		</ul>
	);
};

const BackupsWithData = withData( {
	url: 'hm-stack/v1/backups/',
	title: 'Backups',
	id: 'cloud-backups-block',
} )( Backups );

export default BackupsWithData;
