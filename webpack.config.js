const path = require("path");
module.exports = {
  mode: "production",
  // 入口是 tsx, 但程序不认识 jsx, 配置 rules
  entry: {
		index:  "./lib/index.tsx"
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
  module: {
    rules: [
      // 配置 ts tsx
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
};
