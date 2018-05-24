const { compose } = require( 'react-app-rewired' );
const rewireStyledComponents = require( 'react-app-rewire-styled-components' );
const rewireSVG = require( 'react-app-rewire-svg-react-loader' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const DynamicPublicPathPlugin = require('dynamic-public-path-webpack-plugin');

//  custom config
module.exports = function ( config, env ) {
	const rewires = compose(
		rewireStyledComponents,
		rewireSVG,
	);

	config.plugins = config.plugins.map( plugin => {
		if ( ! (plugin instanceof ExtractTextPlugin) ) {
			return plugin;
		}

		return new ExtractTextPlugin( {
			filename:  'static/css/[name].[contenthash:8].css',
			allChunks: true,
		} );
	} );

	config.plugins.push( new DynamicPublicPathPlugin( {
		externalGlobal: 'window.HM.UI.BuildURL', //Your global variable name.
		chunkName: 'hm-ui',
	} ) );

	config.entry = { 'hm-ui': config.entry };

	// Normalise public path for chunks & SW.
	//config.output.publicPath = '/content/hm-platform/plugins/hm-platform-ui/build/';

	return rewires( config, env );
}
