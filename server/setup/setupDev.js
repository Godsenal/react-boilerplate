const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../config/webpack.config.dev.js');

module.exports = function setupDev(app) {
  const { publicPath, path: outputPath } = config.output;
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  // webpackDevMiddleware uses memory-fs internally to store build
  // https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832
  const fs = middleware.fileSystem;
  app.get('*', (req, res) => {
    fs.readFile(path.join(outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      }
      else {
        res.send(file.toString());
      }
    });
  });
};
