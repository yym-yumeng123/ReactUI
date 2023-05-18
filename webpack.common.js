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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      lib: path.resolve(__dirname, "lib/"),
      example: path.resolve(__dirname, "example/"),
    },
  },
};
