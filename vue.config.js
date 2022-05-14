const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const version = require("./.github/version.json").version;
const dayjs = require("dayjs");
require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn");
const time = dayjs().format("YYYY-M-D HH:mm:ss");

module.exports = {
  publicPath: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/public/",
  productionSourceMap: false,
  configureWebpack: (config) => {
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
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
      splitChunks: {
        automaticNameDelimiter: "-",
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 50000,
        maxSize: 50000,
        minChunks: 1,
        cacheGroups: {
          vendor: {
            name: "vendor",
            minChunks: 2,
            test: /[\\/]node_modules[\\/]/,
            priority: -50,
          },
        },
      },
    };
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
    config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  },
  filenameHashing: true,
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
