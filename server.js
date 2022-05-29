const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function () {
  console.log("Listening on Port 3000");
});
