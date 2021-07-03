const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const version = require("../.github/version.json");

// ========== //
let isDev = false;
let isPolyfill = false;
// ========== //

let _entry = {
    "all": path.resolve(__dirname, "../src/main.js"),
    "serviceworker": path.resolve(__dirname, "../src/js/sw-v2.js")
};
if (isPolyfill) {
    _entry[1] = _entry[0];
    _entry[0] = "@babel/polyfill"
};

module.exports = {
    mode: isDev ? "development" : "production",
    entry: _entry,
    target: "browserslist",
    output: {
        filename: `[name].min.js`,
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.ext$/,
                use: "cache-loader",
                include: path.resolve(__dirname, "../src/main.js")
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.md$/,
                use: 'raw-loader',
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
            chunkFilename: "[id].css",
        }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./polyfill-manifest.json')
        // }),
        new OptimizeCssAssetsPlugin({
            canPrint: false
        })
    ],
    optimization: {
        sideEffects: false,
        usedExports: true,
        chunkIds: "deterministic",
        moduleIds: "deterministic"
    },
    // devtool: "source-map"
}