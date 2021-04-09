import express from "express";
import ReactDOM from "react-dom/server";

import App from "../shared/App";
import IndexTemplate from "./index.template";

const app = express();

app.use('/static', express.static("./build/client"));

app.get("/", (req, res) => {
  res.send(IndexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
