var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'react/public');
var APP_DIR = path.resolve(__dirname, 'react/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader : 'css-loader',
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;