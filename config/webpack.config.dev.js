const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = common({
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // Difference between webpack-hot-middleware & react-hot-loader
  // https://github.com/gaearon/react-hot-loader/issues/489
  babelOption: {
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    plugins: ['react-hot-loader/babel'],
  },
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true, // custom
    }),
  ],
});
