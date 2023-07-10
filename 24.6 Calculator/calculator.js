import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Hello World");
  var options = {
    root: __dirname,
  };
  var fileName = "index.html";
  res.sendFile(fileName, options, (err) => {
    if (err) throw err;
    console.log("file sent: " + fileName);
  });
});

app.post("/", (req, res) => {
  // console.log("posting worked");
  // res.send("thanks for posting.");
  // console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.listen(port, () => {
  console.log(`app starts listening on port ${port}`);
});

app.get("/bmicalculator", (req, res) => {
  // res.send("bmi calculator page");
  var options = {
    root: __dirname,
  };
  var fileName = "bmiCalculator.html";
  res.sendFile(fileName, options, (err) => {
    if (err) throw err;
    console.log("file sent: " + fileName);
  });
});

app.post("/bmicalculator", (req, res) => {
  // res.send("bmi calculator page - post performed.");
  var weightInKg = parseFloat(req.body.weight);
  var heightInCm = parseFloat(req.body.height);
  var BMI = weightInKg / Math.pow(heightInCm / 100, 2);
  //shows two decimals.
  BMI = BMI.toFixed(2);
  res.send("your BMI is " + BMI + ".");
});
