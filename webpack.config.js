const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const webpack = require('webpack');

const port = 3000;

const outputPath = path.join(__dirname, 'public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.jsx',
  output: {
    path: outputPath,
    filename: 'public/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  devServer: {
    port,
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('public/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
      },
    }),
  ],
};
