const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

// const env = require('node-env-file');

const webpack = require('webpack');

// env(__dirname + '/.env');

const port = 3000;

const outputPath = path.join(__dirname, 'public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
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
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        GOOGLE_ID: JSON.stringify(process.env.GOOGLE_ID),
        NEWS_API_KEY: JSON.stringify(process.env.NEWS_API_KEY)
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('public/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
