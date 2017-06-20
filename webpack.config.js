const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

const config = {
	entry: ["./App.js"],
	output: {
		path: path.resolve(__dirname),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test: /\.css$/,
				loader: extractPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

			}

		]
	},
	plugins: [
		extractPlugin
	]
};

module.exports = config;