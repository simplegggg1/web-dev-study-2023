// alert("js connected");

//need this line if you want to include jquery script in the header..
// $(document).ready(function () {
//   $("h1").css("color", "red");
//   $("button").css("color", "red"); //choosing all buttons.
// });

document.querySelector("h1");
$("h1");
$("button"); //choosing all buttons.

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
$("h1").hasClass("margin-50"); //returns boolean

$("h1").text("Bye."); //replace the text.
$("button").text("Don't click me"); //replace the text of all buttons.
$("button").html("<em>Hey</em>"); //replace the html inside

//Attribute
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
$("h1").attr("class");

//Adding Event Listener
$("h1").click(function () {
  $("h1").css("color", "purple");
});

//these two do the same.
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keydown(function (event) {
  console.log(event.key);
});
//targeting whole page
$(document).keydown(function (event) {
  // console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function (event) {
  $("h1").css("color", "purple");
});

$("h1").on("mouseout", function (event) {
  $("h1").css("color", "");
});
