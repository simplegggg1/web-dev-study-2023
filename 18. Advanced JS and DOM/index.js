// alert("index.js connected");

/*
//Anonymous function
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});
*/

function handleClick() {
  // alert("I got clicked!");
  //play tom-1.mp3
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  console.log(this.innerHTML);
}

//adding click event listener to the first button.
// document.querySelector("button").addEventListener("click", handleClick);

//adding click event to all buttons.
//(by targeting drum class)
var buttons = document.querySelectorAll(".drum");
buttons.forEach((element) => {
  // element.addEventListener("click", handleClick);
  element.addEventListener("click", function () {
    // console.log(this);
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    var audio;
    switch (buttonInnerHTML) {
      case "w":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "a":
        audio = new Audio("sounds/kick-bass.mp3");
        break;
      case "s":
        audio = new Audio("sounds/snare.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "j":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "k":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "l":
        audio = new Audio("sounds/tom-4.mp3");
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }

    if (audio !== null) audio.play();
  });
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
