const webpack = require('webpack');
const webpackconfig = require('./webpack.config.js');
const fs = require('fs');

let compiler = webpack(webpackconfig);


console.log("Beginning webpack build\n")
compiler.run((err, stats) => {
	if (stats.compilation.errors[0]) {
		console.log("Webpack build failed\n");
		console.log(stats.compilation.errors[0]);
		process.exit(1);
	} else {
		console.log("Deleting node_modules")
		fs.unlinkSync("./node_modules");
		console.log("Build finished, ready to deploy...");
	}
});
