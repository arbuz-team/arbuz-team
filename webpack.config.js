"use strict";

var
    base_path = './client/',
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		EcosystemView:    base_path + 'sandbox_EcosystemView.js',
		standard:         base_path + 'sandbox_standard.js'
	},
	output: {
		path: __dirname,
		filename: base_path + 'static/js/[name].bundle.js'
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a valid name to reference
				query: {
					presets: ['es2015'],
                    comments: false,
				}
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract(
					"style",
					"css?-url!sass" // &minimize
				)
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(base_path + "static/css/bundle.css")
	]
};