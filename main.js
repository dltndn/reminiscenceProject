const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = 3200;

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/b", function (req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function (req, res) {
    console.log("Hello from B!");
    res.redirect("/");
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
