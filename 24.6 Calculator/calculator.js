import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World");
  var options = {
    root: __dirname,
  };
  res.sendFile("index.html", options, (err) => {
    if (err) throw err;
    console.log("file sent");
  });
});

app.post("/", (req, res) => {
  // console.log("posting worked");
  // res.send("thanks for posting.");
});

app.listen(port, () => {
  console.log(`app starts listening on port ${port}`);
});
