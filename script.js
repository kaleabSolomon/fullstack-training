"use strict";

// create the typing effect on the attributes
const ele = document.querySelector(".att");

window.onload = function () {
  const text = ele.innerHTML;
  ele.innerHTML = "";
  let i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      ele.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      addCursor();
    }
  }, 80);
};
// create the cursor effect
// function addCursor() {
//   let cursor = document.querySelector(".cursor");
//   cursor.style.display = "inline-block";
// }
