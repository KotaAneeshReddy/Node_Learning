const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("List of users");
  res.send("<h2>List of users</h2>");
});

app.use("/", (req, res, next) => {
  console.log("First Handler");
  res.send("<h1>Welcome to home page</h1>");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
