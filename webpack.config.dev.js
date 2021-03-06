const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './views/view.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'YUI',
      template: './views/view.html',
    }),
  ],
});
