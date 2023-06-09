// alert("game.js");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;

function nextSequence() {
  //generate a new random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  //update level text
  $("#level-title").text("Level " + ++currentLevel);

  //blink button.
  $("#" + randomChosenColour)
    .animate({ opacity: "toggle" }, 100)
    .animate({ opacity: "toggle" }, 100);

  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
}

function buttonClicked() {
  if (gameStarted == false) return;

  var userChosenColour = this.id; //store the id of the button.
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//apply pressed css style and remove after 100ms.
function animatePress() {
  if (gameStarted == false) return;

  var buttonId = "#" + this.id;
  $(buttonId).addClass("pressed");
  setTimeout(function () {
    $(buttonId).removeClass("pressed");
  }, 100);
}

//check the answer
//gamePattern vs userClickedPattern
function checkAnswer() {
  if (gameStarted == false) return;

  for (let idx = 0; idx < userClickedPattern.length; idx++) {
    if (gamePattern[idx] != userClickedPattern[idx]) {
      //end game
      endGame();
      break;
    }
  }
}

function goNextLevel() {
  if (gameStarted == false) return;

  if (
    gamePattern.lenght != 0 &&
    gamePattern.length == userClickedPattern.length
  ) {
    userClickedPattern = [];

    //give a delay
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
}
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
  currentLevel = 0;
}

function endGame() {
  startOver();
  $("#level-title").text("Game Over, Press Any Key to Restart");
  //apply game-over css class on the body and remove after 200ms.
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  //play gameover sound
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}

$(".btn").on("click", buttonClicked);
$(".btn").on("click", animatePress);
$(".btn").on("click", checkAnswer);
$(".btn").on("click", goNextLevel);

var gameStarted = false;

//detect a keyboard key to start.
$(document).keydown(function () {
  if (gameStarted) return;

  gameStarted = true;
  nextSequence();
});
