const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  const height = Number(req.body.height) / 100;
  const weight = Number(req.body.weight);

  function BMI(height, weight) {
    num = weight / height ** 2;
    return Math.round(num * 100) / 100;
  }

  function BMIDetails(num) {
    if (num < 18.5) {
      return "UnderWeight";
    } else if (num >= 18.5 && num <= 24.9) {
      return "Normal";
    } else if (num >= 25 && num <= 29.9) {
      return "Overweight";
    } else if (num >= 30) {
      return "Obase";
    }
  }
  let calculateBMI = BMI(height, weight);
  let details = BMIDetails(calculateBMI);
  res.send(
    `<strong>Your BMI is ${calculateBMI} And You are ${details}<strong/>`
  );
});

app.listen(3000, function () {
  console.log("Listening on Port 3000");
});
