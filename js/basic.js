"use strict";

// 언어 지원

const langMenu = document.querySelector("#lang_list");

let i = 0;

function on() {
  if (i) {
    langMenu.style.display = "flex";
    i++;
  } else {
    langMenu.style.display = "none";
    i--;
  }

  return;
}

// 모바일 서브메뉴
let subMenu = document.querySelector(".sub_menu_m");
let subBlack = document.querySelector("#sub_black");
let subList = document.querySelector("#sub_menu_m_list");

function onSubmenuM() {
  subMenu.style.width = "100%";

  subBlack.style.opacity = "1";

  subList.style.transform = "translateX(0px)";
}

function offSubmenuM2() {
  subMenu.style.width = "0";
}

function offSubmenuM() {
  subBlack.style.opacity = "0";

  subList.style.transform = "translateX(332px)";

  setTimeout(offSubmenuM2, 500);
}
