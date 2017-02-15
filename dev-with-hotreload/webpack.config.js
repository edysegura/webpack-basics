const debug = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./js/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist/js"),
        filename: "[name].bundle.js",
        publicPath: '/js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./src")
    },
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};