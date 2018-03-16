// eslint-disable-next-line
/*global HM, __webpack_public_path__*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if ( process.env.NODE_ENV === 'production' ) {
	// eslint-disable-next-line
	__webpack_public_path__ = HM.UI.BuildURL.replace( /\/?$/, '/' );
}

ReactDOM.render( <App />, document.getElementById( 'hm-platform-root' ) );
registerServiceWorker();
