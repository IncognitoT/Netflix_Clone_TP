const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/javaapi', { target: 'http://localhost:8060/netflix/',changeOrigin: true, pathRewrite: { '^/javaapi': '' } }));
  app.use(createProxyMiddleware('/node', { target: 'http://127.0.0.1:8800/api/fav', changeOrigin: true, pathRewrite: { '^/node': '' } }));
};