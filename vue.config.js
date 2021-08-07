const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const webpack = require("webpack");
const version = require("./.github/version.json").version;
const dayjs = require("dayjs");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn");

let time = dayjs().format("YYYY-M-D HH:mm:ss");

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
    config.externals = {
      vue: "Vue",
      marked: "marked",
      "vue-router": "VueRouter",
    };
    config.resolve = {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(
          __dirname,
          "./src/js/icons.js"
        ),
      },
    };
    config.optimization = {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    };
    // plugins: [new BundleAnalyzerPlugin()],
  },
  chainWebpack: (config) => {
    config
      .plugin("banner")
      .use(webpack.BannerPlugin, [
        [
          "ERSS SAYING",
          `(c) 2020-${new Date().getFullYear()} Xhemj`,
          `Build: ${time}`,
          `Version: ${version}`,
          "====",
          "o(〃＾▽＾〃)o",
        ].join("\n"),
      ]);
    config.plugin("html").tap((args) => {
      args[0].TIME = time;
      args[0].VERSION = version;
      args[0].NOW_YEAR = new Date().getFullYear();
      args[0].minify = {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      };
      return args;
    });
  },
  filenameHashing: false,
  css: {
    extract: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#9B4DC9",
          "link-color": "#5755d9",
          "border-radius-base": "2px",
          "text-color": "#303742",
        },
      },
    },
  },
};
