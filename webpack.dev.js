const path = require('path');
const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname),
    // watchContentBase: true,
    liveReload: false,
    publicPath: '/build',
    hot: true,
    writeToDisk: false,
    // inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
