document.firstElementChild.lastElementChild.firstElementChild.innerText =
  "Goodbye";

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye";

heading.style.color = "red";

document.querySelector("input").click();

// challenge - change the text Third in the list element into my name.
document.querySelector("ul").lastElementChild.innerText = "Taeyoung";
