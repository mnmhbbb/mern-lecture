const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-usedshop.herokuapp.com:5000',
      changeOrigin: true,
    }),
  );
};
