const { compose } = require( 'react-app-rewired' );
const rewireStyledComponents = require( 'react-app-rewire-styled-components' );
const rewireSVG = require( 'react-app-rewire-svg-react-loader' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

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

	return rewires( config, env );
}
