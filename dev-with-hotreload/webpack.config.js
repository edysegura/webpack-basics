const debug = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");
const commonsChunk = new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" });

module.exports = {
    context: path.resolve(__dirname, "./src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        vendor: ["jquery", "moment", "lodash"],
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
    plugins: debug ? [
        commonsChunk
    ] : [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8: true },
            compress: { screw_ie8: true, warnings: false },
            sourcemap: false,
            comments: false
        }),
        commonsChunk
    ],
};