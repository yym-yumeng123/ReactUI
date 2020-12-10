const base = require('./webpack.config')
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: "production",
  entry: {
    example: './views/view.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/view.html',
      filename: 'doc/index.html'
    }),
  ],
});
