const conf = require('./gulp.conf');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');
const webpackConf = require('./webpack.conf');
const webpackBundler = webpack(webpackConf);

var backendProxy = proxy('/api',{
  target:'http://yjyx.com',
  changeOrigin: true,
  logLevel: 'debug'
});

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      port: 9000,
      startPath: '/api',
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConf.output.publicPath,

          // Quiet verbose output in console
          quiet: true
        }),
        backendProxy,
        // bundler should be the same as above
        webpackHotMiddleware(webpackBundler)
      ]
    },
    open: true
  };
};
