//CJS type
// var generateName = require("sillyname");

// //ESM type
// //import xxx from "packageName";
// import generateName from "sillyname";
// var sillyName = generateName();

// //beware - it's backtick(`) wrapping the string.
// console.log(`My name is ${sillyName}.`);

//challenge
//install and import the superheroes npm.
//use node to print a random superhero name on colsole.
//ex) I am xxx!
import superheroes from "superheroes";
var superHeroName = superheroes.random();
console.log(`I am ${superHeroName}!`);
