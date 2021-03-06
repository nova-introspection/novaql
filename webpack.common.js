const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'electron-main',
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    // publicPath: '/build/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(pdf)$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /.(jpg|png|gif|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.react.js'],
  },
};
