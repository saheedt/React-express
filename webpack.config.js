const path = require('path');

//const entryPoint = path.resolve("App.js");
//const outputDir = path.resolve(__dirname);

const config = {
	entry: "./App.js",
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
			}

		]
	}
}

module.exports = config;