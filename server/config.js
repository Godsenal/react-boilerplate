const { NODE_ENV, PORT, HOST } = process.env;

module.exports = {
  isDev: NODE_ENV === 'development',
  host: HOST || 'localhost',
  port: PORT || 3000,
};
