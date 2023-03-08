const {  } = require('http-proxy-middleware');
createProxyMiddleware
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};