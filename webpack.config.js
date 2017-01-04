'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [ './src/index' ],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: './dist/'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [ 'babel' ]
		}, {
			test: /\.styl$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract(
				'style-loader?sourceMap',
				'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader'
			)
		}]
	},

	devtool: 'inline-source-map',

	plugins: [
		new ExtractTextPlugin('styles.css', { allChunks: true }),
		//new webpack.ProvidePlugin({ React: 'react' })
	],

	postcss: [
		require('autoprefixer')({ browsers: ['> 1%'] })
	],

	resolve: {
		alias: {
			'actions': path.resolve(__dirname, './src/actions/actions')
		}
	}
};
