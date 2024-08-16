"use strict";

//새로고침하면 스크롤 위로

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

// 언어 지원

const langMenu = document.querySelector("#lang_list");

let l = 0;

function on() {
  if (l) {
    langMenu.style.display = "flex";
    l++;
  } else {
    langMenu.style.display = "none";
    l--;
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

// 스크롤 상단으로 올리는 함수

function toTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

//슬릭슬라이더

$(document).ready(function () {
  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000,
    dots: true,
  });
  $(".section2 .card_con").slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 467,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".section5 .card_con").slick({
    slidesToShow: 3,
  });
});

$("#main_control1").click(function () {
  $(".slide").slick("slickNext");
});
$("#main_control2").click(function () {
  $(".slide").slick("slickPrev");
});

$(".section2 .next").click(function () {
  $(".section2 .card_con").slick("slickNext");
});
$(".section2 .prev").click(function () {
  $(".section2 .card_con").slick("slickPrev");
});

$(".section5 .next").click(function () {
  $(".section5 .card_con").slick("slickNext");
});
$(".section5 .prev").click(function () {
  $(".section5 .card_con").slick("slickPrev");
});

//카테고리

// const tabList = document.querySelectorAll("#category div a");

// function onCategory(i) {
//   tabList[i].className = "is_on";
// }

// tabList[2].addEventListener("click", function () {
//   tabList[2].classList.add("is_on");
// });

// for (var i = 0; i < tabList.length; i++) {
//   tabList[i].addEventListener("click", function () {
//     for (var j = 0; j < tabList.length; j++) {
//       tabList[j].classList.remove("is_on");
//     }
//     this.classList.add("is_on");
//   });
// }
