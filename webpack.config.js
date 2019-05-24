var webpack = require('webpack');
var path = require('path');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
	entry: APP_DIR + '/index.js',
	mode: 'production',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new ProgressBarPlugin({
  		format: '[:bar] :percent :msg',
  		clear: false
		})
	],
	module: {
		rules: [
			{
				test: /\.js?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
		]
	},
};

module.exports = config;
