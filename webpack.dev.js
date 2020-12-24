const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    open: true,
    writeToDisk: true,
    port: 3000,
  },
});
