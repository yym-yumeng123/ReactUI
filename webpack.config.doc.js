const base = require('./webpack.config')
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: "production",
  // 入口文件在哪里
  entry: {
    view: './views/view.tsx',
  },
  // 输出到哪里
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  // template: 需要的模板， fileName： 自己定义的名称
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/view.html',
      filename: 'index.html'
    }),
  ],
});
