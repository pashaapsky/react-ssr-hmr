const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const nodemon = require("nodemon");
const compiler = webpack(webpackConfig);
const path = require("path");

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
