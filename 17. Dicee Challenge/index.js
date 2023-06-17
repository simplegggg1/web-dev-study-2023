//left dice - set number
var randomNumber1 = getRandomDice();
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
//right dice - set number
var randomNumber2 = getRandomDice();
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Display a winner
var winnerText;
if (randomNumber1 > randomNumber2) {
  winnerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winnerText = "Player 2 Wins!";
} else {
  winnerText = "Draw!";
}
document.querySelector("h1").innerText = winnerText;

function getRandomDice() {
  var number = Math.random() * 6 + 1;
  number = Math.floor(number);

  return number;
}
