const {  } = require('http-proxy-middleware');
createProxyMiddleware
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      // target: 'http://52.79.156.244:8080',
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};