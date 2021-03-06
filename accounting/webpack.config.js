/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'accounting.js'),
  output: {
    filename: 'accounting.js',
    library: 'accounting',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/accounting'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'accounting.js')}
    ]),
  ],
  devtool: 'source-map',
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/,
  ],
};

