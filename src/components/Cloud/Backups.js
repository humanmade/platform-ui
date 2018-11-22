import React from 'react';

import { withData } from '../Dashboard-Block';
import { getHumanReadableBytes } from '../../utils';

const Backups = ( { data } ) => {
	if ( ! Array.isArray( data ) || ! data.length ) {
		return <p>No backups found.</p>;
	}

	return (
		<ul>
			{ data.slice( 0, 5 ).map( item => (
				<li key={ item.id }>
					<a href={ item.url }>{ item.id }</a>
					<p>
						<span>{ getHumanReadableBytes( item.size ) }</span>
					</p>
				</li>
			) ) }
		</ul>
	);
}

const BackupsWithData = withData( {
	url: 'hm-stack/v1/backups/',
	title: 'Backups',
	id: 'cloud-backups-block',
} )( Backups );

export default BackupsWithData;
