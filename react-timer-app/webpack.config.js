'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'Index')
  ],

  // externals: {
  //   jquery: 'jQuery'
  // },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // })
  ],

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   include: /src/,
      //   loader: 'standard-loader'
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader'
      }
    ]
  }
}
