const fs = require("fs");
// fs.writeFile("message.txt", "Hello from Node.js", (err) => {
//   if (err) throw err;
//   console.log("message.txt has been saved!");
// });

//Challenge - read message.txt and print on console.
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
