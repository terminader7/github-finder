const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
        use: ["file-loader?name=assets/[name].[ext]"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
  ],
};
