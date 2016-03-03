module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "static/dist/bundle.js"
    },
    module: {
        loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
    }
};