const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    // filename: "[name].[contenthash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "YUI",
      type: "umd",
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      // 返回的一个完整的 svg
      /**
       * type: "asset/resource" => 将资源分割为单独的文件，并导出url，就是之前的 file-loader的功能
       * type: "asset/inline" => 将资源导出为dataURL（url(data:)）的形式，之前的 url-loader的功能
       * type: "asset/source" => 将资源导出为源码（source code）. 之前的 raw-loader 功能
       * type: "asset" => 自动选择导出为单独文件或者 dataURL形式（默认为8KB）
       */
      // {
      //   test: /\.(svg)$/i,
      //   type: "asset",
      // },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", 'jsx'],
    alias: {
      lib: path.resolve(__dirname, "lib/"),
      example: path.resolve(__dirname, "example/"),
      assets: path.resolve(__dirname, "assets/"),
    },
  },
};
