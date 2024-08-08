"use strict";

const langMenu = document.querySelector("#lang_list");

let i = 0;

function on() {
  if (i == 0) {
    langMenu.style.display = "flex";
    i++;
  } else {
    langMenu.style.display = "none";
    i--;
  }

  return;
}
