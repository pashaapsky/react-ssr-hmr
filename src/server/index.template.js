import React from "react";

function IndexTemplate(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>React-ssr-hmr</title>
        <script src="/static/client.js" type="application/javascript"></script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
`;
}

export default IndexTemplate;
