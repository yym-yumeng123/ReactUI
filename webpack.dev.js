const { merge } = require("webpack-merge");
const common = require('./webpack.common')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    index: './views/view.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "YUI组件库",
      template: './views/view.html'
    }),
  ],
})
