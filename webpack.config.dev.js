const base = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'YUI',
      template: 'example.html',
    }),
    new StylelintWebpackPlugin({
      files: ['lib/**/*.s?(a|c)ss'],
    }),
  ],
});
