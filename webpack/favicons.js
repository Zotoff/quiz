const FavIconsWebpack = require('favicons-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new FavIconsWebpack('./source/favicon.ico')
    ],
  };
};