const path = require("path");
module.exports = {
  // 1. 影响提示, 2. 文件大小 development/production
  // mode: "production",
  // 入口是 tsx, 但程序不认识 jsx, 配置 rules
  entry: {
    index: "./lib/index.tsx"
  },
  // 输出目录
  output: {
    // 因为不同的操作系统, 路径不一样, 所以使用 __dirname, 当前路径
    path: path.resolve(__dirname, "dist/lib"),
    // 库的name
    library: "YUI",
    // 库最后导出的格式
    libraryTarget: "umd"
  },

  // 配置 import 引入
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      // 配置 ts tsx
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      // 配置svg
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      // 使用, 从右往左
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
