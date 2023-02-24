const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const testJs = require('./test')
const mapPage = require('./pages/mapPage')

const port = 3200;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/b", function (req, res, next) {
  res.send("Hello b!");
    // next();
  },
  // function (req, res) {
  //   console.log("Hello from B!");
  //   res.redirect("/");
  // }
);

app.get("/calendar", function (req, res) {
  res.send(testJs.calendarHtml)
})

app.get("/map", function (req, res) {
  res.send(mapPage.mapPage())
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



