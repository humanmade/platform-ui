// eslint-disable-next-line
/*global HM*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * @todo fix service worker cache when multiple instances present
 */
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App />, document.getElementById( 'hm-platform-root' ) );
//registerServiceWorker();
