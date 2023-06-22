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

//adding, removing elements
$("h1").before("<button>Before</button>"); //add before the opening tag of h1
$("h1").after("<button>After</button>"); //add after
$("h1").prepend("<button>Prepend</button>"); //add right after the h1 opening tag
$("h1").append("<button>Append</button>"); //add right before the h1 closing tag
// $("button").remove();

//website animation
// $("h1").hide();
// $("h1").show();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").slideUp();
// $("h1").slideDown();

$("button").click(function () {
  // $("h1").toggle(); //hide <-> show
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  //you can only add css values with a numeric value.
  // $("h1").animate({ opacity: 0.5 });
  //if you want more than one animations, chain them.
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
