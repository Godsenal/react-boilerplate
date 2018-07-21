const path = require('path');
const compression = require('compression'); // compression middleware
const express = require('express');

module.exports = function setupProd(app) {
  const outputPath = path.resolve(process.cwd(), 'dist');
  const publicPath = '/';
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
  });
};
