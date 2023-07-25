const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //console.log(res);

  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h2>Hi Welcome! Let's learn NodeJS</h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("<li>User 4</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Listening on port 3001");
});
