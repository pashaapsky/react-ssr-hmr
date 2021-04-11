const webpack = require("webpack");
const [clientConfig, serverConfig] = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");
const cors = require("cors");

const hmrServer = express();
const clientCompiler = webpack(clientConfig);

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: "errors-only",
  }),
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: "/static/__webpack_hmr",
  }),
);

hmrServer.use(cors());

hmrServer.listen(3001, () => {
  console.log("HMR server success");
});


const compiler = webpack(serverConfig);

// холодный старт приложения
compiler.run((err) => {
  if (err) {
    console.log("Compilation failed: ", err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log("Compilation failed: ", err);
    }

    console.log("Compilation success");
  });

  nodemon({
    script: path.resolve(__dirname, "../build/server/server.js"),
    watch: [path.resolve(__dirname, "../build/server"), path.resolve(__dirname, "../build/client")],
  });
});
