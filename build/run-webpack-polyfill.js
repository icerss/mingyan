let wp_config = require("./webpack.config.js");
const path = require("path");
wp_config.entry = ["@babel/polyfill", "whatwg-fetch", path.resolve(__dirname, "../src/main.js")];
wp_config.output.filename = `all.polyfill.min.js`;
module.exports = wp_config;