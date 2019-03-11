const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = common({
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/#devtool 참고
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpack-hot-loader를 위한 plugin
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true, // custom
    }),
  ],
});
