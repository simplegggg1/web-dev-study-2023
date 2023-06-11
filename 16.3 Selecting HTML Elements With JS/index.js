document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].innerText = "Taeyoung";
document.getElementsByTagName("li")[2].style.color = "red";
document.getElementsByTagName("li").length; //3

var btns = document.getElementsByClassName("btn");
btns[0].style.color = "red";

document.getElementById("title").innerHTML = "Goodbye";

document.querySelector("h1"); //selector like the one in css. element, class, or id.
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a"); //return google, find an anchor tag inside a list element.
document.querySelector("a"); //return Youtube.
document.querySelector("li.item"); // list element that the class is item.
document.querySelector("#list a"); // inside the element which has id of list, find an anchor tag.
document.querySelector("#list .item"); // when multiple, return the first one.
document.querySelectorAll("#list .item"); // return an array as a list.
document.querySelectorAll("#list .item")[1].innerText = "haha";

//challenge - change the anchor tag's color. The one inside the list.
document.querySelector("#list a").style.color = "red";
