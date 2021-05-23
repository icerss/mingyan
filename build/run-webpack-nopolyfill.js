let wp_config = require("./webpack.config.js");
const path = require("path");
wp_config.entry = [path.resolve(__dirname, "../src/main.js")];
wp_config.output.filename = `all.min.js`;
module.exports = wp_config;