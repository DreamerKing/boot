const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
        	'babel-loader',
					'eslint-loader'
				],
        enforce: 'pre'
      },*/
      {
        test: /\.(css|less)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
    //,
    // loaders: [
    //   {
    //     test: /\.(gif|png|jpe?g|svg)$/i,
    //     loaders: [
    //       'file-loader',
    //       {
    //         loader: 'image-webpack-loader',
    //         query: {
    //           progressive: true,
    //           optimizationLevel: 7,
    //           interlaced: false,
    //           pngquant: {
    //             quality: '65-90',
    //             speed: 4
    //           }
    //         }
    //       }
    //     ]
    //   }
    // ]
  },
  // devServer: {
  //   proxy: {
  //     '/api/*': {
  //       target: 'http://139.196.14.118:80',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('/public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    })
  ],
  devtool: 'source-map',
  /*resolve: {
    extensions: ['.js','.json', '.less', ' '],
    alias: {
      'components': path.join(conf.path.src, '/components'),
    }
  },*/
  //Webpack出口
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    //publicPath: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  //Webpack入口
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `./${conf.path.src('index')}`
  ]
};
