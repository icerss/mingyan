const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");

// ========== //
let isDev = false;
let isPolyfill = false;
// ========== //

let _entry = [
    path.resolve(__dirname, "../src/main.js")
];
if (isPolyfill) {
    _entry[1] = _entry[0];
    _entry[0] = "@babel/polyfill"
};

module.exports = {
    mode: isDev ? "development" : "production",
    entry: _entry,
	target: "browserslist",
    output: {
        filename: `all.min.js`,
        path: path.resolve(__dirname, "../dist")
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
        new OptimizeCssAssetsPlugin()
    ],
	optimization: {
		sideEffects: false,
		usedExports: true,
		chunkIds: "deterministic",
		moduleIds: "deterministic"
	}
}