// vue.config.js
const merge = require("webpack-merge");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap(options =>
        merge(options, {
          limit: 5000
        })
      );
  }
};
