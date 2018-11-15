import React from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';

export default function LoadableVictory( Component ) {
	return Loadable.Map( {
		loader: {
			Victory: () => import( 'victory' ),
			theme: () => import( '../victory-theme' ),
		},
		loading: Loading,
		render( loaded, props ) {
			const finalProps = {
				...props,
				victory: {
					components: { ...loaded.Victory },
					theme: loaded.theme.adminTheme,
				},
			};

			return <Component { ...finalProps } />;
		},
	} );
}
