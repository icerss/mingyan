const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "production",
    entry: {
        polyfill: ["@babel/polyfill"]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].min.js",
        library: "[name]_library"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, "[name]-manifest.json"),
            name: "[name]_library",
            context: __dirname
        })
    ]
};