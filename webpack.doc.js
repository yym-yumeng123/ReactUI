const { merge } = require("webpack-merge");
const common = require('./webpack.common')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: './views/view.tsx'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "doc"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "YUI组件库",
      template: './views/view.html',
      filename: "index.html"
    }),
  ],
})
