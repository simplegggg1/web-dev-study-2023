// alert("index.js connected");

/*
//Anonymous function
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});
*/

function handleClick() {
  alert("I got clicked!");
}

//adding click event listener to the first button.
// document.querySelector("button").addEventListener("click", handleClick);

//adding click event to all buttons.
//(by targeting drum class)
var buttons = document.querySelectorAll(".drum");
buttons.forEach((element) => {
  element.addEventListener("click", handleClick);
});

//higher order function
/*
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  if (num2 != 0) return num1 / num2;
  else return "divide by 0 error";
}
function multiply(num1, num2) {
  return num1 * num2;
}

function calculator(num1, num2, callback) {
  return callback(num1, num2);
}
*/
