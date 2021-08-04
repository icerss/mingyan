const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const webpack = require("webpack");
const version = require("./.github/version.json").version;
const dayjs = require("dayjs");
require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: "Vue",
      marked: "marked",
      "vue-router": "VueRouter",
    },
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(
          __dirname,
          "./src/js/icons.js"
        ),
      },
    },
    // plugins: [new BundleAnalyzerPlugin()],
  },
  chainWebpack: (config) => {
    config
      .plugin("banner")
      .use(webpack.BannerPlugin, [
        [
          "ERSS SAYING",
          `(c) 2020-${new Date().getFullYear()} Xhemj`,
          `Build: ${dayjs().format("YYYY-M-D HH:mm:ss")}`,
          `Version: ${version}`,
          "====",
          "o(〃＾▽＾〃)o",
        ].join("\n"),
      ]);
  },
  // filenameHashing: false,
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
  // pwa: {
  //     name: "耳斯名言",
  //     description: "快来看看厦门市音乐学校老师和同学们的名言吧！——ERSS！",
  //     themeColor: "#5676dc",
  //     msTileColor: "#5676dc",
  //     appleMobileWebAppCapable: "yes",
  //     manifestPath: "manifest.json",
  //     display: "standalone",
  //     startUrl: "/?from=pwa",
  //     iconPaths: null,
  //     icon: [
  //         {
  //             "src": "https://cdn.erssmy.com/image/static/mingyan-js-org/new-logo/v2/512x512.png",
  //             "type": "image/png",
  //             "sizes": "512x512",
  //             "purpose": "any maskable"
  //         },
  //         {
  //             "src": "https://cdn.erssmy.com/image/static/mingyan-js-org/new-logo/v2/256x256.png",
  //             "type": "image/png",
  //             "sizes": "256x256",
  //             "purpose": "any maskable"
  //         },
  //         {
  //             "src": "https://cdn.erssmy.com/image/static/mingyan-js-org/new-logo/v2/64x64.png",
  //             "type": "image/png",
  //             "sizes": "64x64",
  //             "purpose": "any maskable"
  //         }
  //     ],
  //     workboxOptions: {
  //         importWorkboxFrom: "cdn",
  //         skipWaiting: true,
  //         runtimeCaching: [
  //             {
  //                 urlPattern: new RegExp("dogecdn.com"),
  //                 handler: "NetworkFirst",
  //                 options: {
  //                     networkTimeoutSeconds: 20,
  //                     cacheName: "image-cache",
  //                     cacheableResponse: {
  //                         statuses: [200]
  //                     }
  //                 }
  //             }
  //         ]
  //     },
  // },
};
