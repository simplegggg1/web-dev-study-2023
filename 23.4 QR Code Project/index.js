/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      // type: "input", //default: input
      name: "url",
      message: "what's the url?",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url;
    //create qrcode
    var urlImage = qrImage.image(
      url
      // , { type: "png" } // default: png
    );
    urlImage.pipe(fs.createWriteStream("qr-img.png"));
    //save the url in URL.txt
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log(`url ${url} is saved in URL.txt`);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
    console.log(error);
  });
