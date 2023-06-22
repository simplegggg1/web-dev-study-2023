// alert("game.js");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  //generate a new random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  //blink button.
  $("#" + randomChosenColour)
    .animate({ opacity: "toggle" }, 100)
    .animate({ opacity: "toggle" }, 100);

  //play the sound
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  gamePattern.push(randomChosenColour);
}

function buttonClicked() {
  // alert("clicked");
  // alert(this.id);
  var userChosenColour = this.id; //store the id of the button.
  userClickedPattern.push(userChosenColour);
}

$(".btn").on("click", buttonClicked);
