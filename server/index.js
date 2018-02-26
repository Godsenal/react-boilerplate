const express = require('express');
const chalk = require('chalk');
const path = require('path');
const compression = require('compression');

const isDev = process.env.NODE_ENV !== 'production';
const { resolve } = require('path');

const app = express();

// app.use('/api', myApi);

// get the intended host and port number, use localhost and port 3000 if not provided
const host = (process.env.HOST || 'localhost');
const port = (process.env.PORT || 3000);
const outputPath = resolve(process.cwd(), 'dist');
const publicPath = '/';

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../config/webpack.config.dev.js');
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  console.log(`Server started in DEVELOPMENT! ${chalk.green('✓')}`);
  app.get('*', (req, res) => {
    res.sendFile(path.join(outputPath, 'index.html'));
  });
}
else {
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
  });
}

app.listen(port, host, (err) => {
  if (err) {
    console.error(chalk.red(err));
  }
  else {
    console.log(`Server started ! ${chalk.green('✓')}`);
  }

  console.log(`
      ${chalk.bold('Server is Running on:')}
      ${chalk.magenta(`http://${host}:${port}`)}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
});
