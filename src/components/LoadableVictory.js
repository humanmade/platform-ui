import React from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';
import { adminTheme } from '../victory-theme';

export default function LoadableVictory( Component ) {
	return Loadable.Map( {
		loader: {
			Victory: () => import( 'victory' ),
		},
		loading: Loading,
		render( loaded, props ) {
			const finalProps = {
				...props,
				victory: {
					components: { ...loaded.Victory },
					theme: adminTheme,
				},
			};

			return <Component { ...finalProps } />;
		},
	} );
}
