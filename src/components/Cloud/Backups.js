import React from 'react';

import { withData } from '../Dashboard-Block';
import { getHumanReadableBytes } from '../../utils';
import { format } from 'date-fns';

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
		<ul className="backup-items">
			{ items.map( item => (
				<li key={ item.id } className="backup-item">
					<h3 className="backup-item__title">
						<a href={ item.url } title="Download backup">
							{ format( item.date, 'dddd Do MMMM, YYYY @ HH:mm' ) }
						</a>
					</h3>
					<dl>
						<dt>Size</dt>
						<dd>{ getHumanReadableBytes( item.size, 2 ) }</dd>
						<dt>Contains</dt>
						<dd>
							{ labels.filter( label => item[ label ] ).map( label => (
								<code key={label}>{ label }</code>
							) ) }
						</dd>
					</dl>
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
