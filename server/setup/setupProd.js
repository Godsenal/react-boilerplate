const path = require('path');
const compression = require('compression');
const express = require('express');

module.exports = function setupProd(app, option) {
  app.use(compression());
  app.use(option.publicPath, express.static(option.outputPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(option.outputPath, 'index.html'));
  });
};
