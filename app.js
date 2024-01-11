const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/user", (req, res, next) => {
  res.send(`Name ${req.body.username}`);
});
app.get("/", (req, res, next) => {
  res.send(
    "<form action='/user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form>"
  );
});
app.listen(5000);
