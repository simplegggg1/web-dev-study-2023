import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req);
  // res.send("Hello");
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("contact me at: simplegggg1@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I'm Taeyoung Park, who is studying web back end using js now.");
});

//nodemon test - no need.
//use node --watch <filename> instead.
app.get("/email", (req, res) => {
  res.send("contact email: simplegggg1@gmail.com");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
