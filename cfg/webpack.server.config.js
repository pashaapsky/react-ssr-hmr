const path = require("path");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()], // remove node_modules
  module: {
    rules: [{ test: /\.[tj]sx?$/, use: "ts-loader" }],
  },
  optimization: {
    minimize: false,
  },
  watchOptions: {
    ignored: "/build/",
  },
};
