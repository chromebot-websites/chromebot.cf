const webpack = require('webpack');
const webpackconfig = require('./webpack.config.js');

let compiler = webpack(webpackconfig);


console.log("Beginning webpack build\n")
compiler.run((err, stats) => {
	if (stats.compilation.errors[0]) {
		console.log("Webpack build failed\n");
		console.log(stats.compilation.errors[0]);
		throw "Compilation failed";
	} else {
		console.log("Build finished, ready to deploy...");
  }
});
