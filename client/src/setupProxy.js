const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("/api/example/*", {
        target: 'http://localhost:5000' || `${process.env.HOST}:${process.env.PORT}`,
        secure: false,
        changeOrigin: true
    }));
};