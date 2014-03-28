var webpack = require('webpack')
  , path = require('path');

module.exports = {

  cache: true,

  entry: {
    app: 'app'
  },

  output: {
    path: path.join(__dirname, 'public/build'),
    publicPath: 'build/',
    filename: '[name].js'
  },

  node: {
    filename: false,
    dirname: false,
    process: true,
    global: false,
    buffer: false
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },

  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },

  plugins: []

}

