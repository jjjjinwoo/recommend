"use strict";

// 슬라이드 이벤트

const title2 = document.querySelector(".section2 .title");
const cardCon2_1 = document.querySelector("#cardCon2_1");
const cardCon2_2 = document.querySelector("#cardCon2_2");
const cardCon2_3 = document.querySelector("#cardCon2_3");
const cardCon2_4 = document.querySelector("#cardCon2_4");

console.log(document.querySelector(".section2 .card:nth-child(13)"));

document.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    title2.classList.add("scrollArrive");
    setTimeout(function () {
      cardCon2_1.classList.add("scrollArrive");
    }, 200);
    setTimeout(function () {
      cardCon2_2.classList.add("scrollArrive");
    }, 400);
    setTimeout(function () {
      cardCon2_3.classList.add("scrollArrive");
    }, 600);
    setTimeout(function () {
      cardCon2_4.classList.add("scrollArrive");
    }, 800);
  }
});

const imgBox = document.querySelector(".section3 .img");
const textBox = document.querySelector(".section3 .text_box");

document.addEventListener("scroll", () => {
  if (window.scrollY > 1450) {
    imgBox.classList.add("scrollArrive");
    setTimeout(function () {
      textBox.classList.add("scrollArrive");
    }, 200);
  }
});

const title4 = document.querySelector(".section4 h3");
const shortcut1 = document.querySelector(".section4 #shortcut1");
const shortcut2 = document.querySelector(".section4 #shortcut2");
const shortcut3 = document.querySelector(".section4 #shortcut3");
const shortcut4 = document.querySelector(".section4 #shortcut4");
const shortcut5 = document.querySelector(".section4 #shortcut5");
const shortcut6 = document.querySelector(".section4 #shortcut6");

document.addEventListener("scroll", () => {
  if (window.scrollY > 2180) {
    title4.classList.add("scrollArrive");
    setTimeout(function () {
      shortcut1.classList.add("scrollArrive");
    }, 200);
    setTimeout(function () {
      shortcut2.classList.add("scrollArrive");
    }, 400);
    setTimeout(function () {
      shortcut3.classList.add("scrollArrive");
    }, 600);
    setTimeout(function () {
      shortcut4.classList.add("scrollArrive");
    }, 800);
    setTimeout(function () {
      shortcut5.classList.add("scrollArrive");
    }, 1000);
    setTimeout(function () {
      shortcut6.classList.add("scrollArrive");
    }, 1200);
  }
});

const title5 = document.querySelector(".section5 .title");
const videoImage1 = document.querySelector(".section5 #videoImage1");
const videoImage2 = document.querySelector(".section5 #videoImage2");
const videoImage3 = document.querySelector(".section5 #videoImage3");

document.addEventListener("scroll", () => {
  if (window.scrollY > 2900) {
    title5.classList.add("scrollArrive");
    setTimeout(function () {
      videoImage1.classList.add("scrollArrive");
    }, 200);
    setTimeout(function () {
      videoImage2.classList.add("scrollArrive");
    }, 400);
    setTimeout(function () {
      videoImage3.classList.add("scrollArrive");
    }, 600);
  }
});

const title6 = document.querySelector(".section6 h3");
const table6 = document.querySelector(".section6 table");

document.addEventListener("scroll", () => {
  if (window.scrollY > 3800) {
    title6.classList.add("scrollArrive");
    setTimeout(function () {
      table6.classList.add("scrollArrive");
    }, 200);
  }
});

const sec8_1 = document.querySelector(".section8 .high");
const sec8_2 = document.querySelector(".section8 > span");
const sec8_3 = document.querySelector(".section8 img");

document.addEventListener("scroll", () => {
  if (window.scrollY > 4900) {
    sec8_1.classList.add("scrollArrive");
    setTimeout(function () {
      sec8_2.classList.add("scrollArrive");
    }, 200);
    setTimeout(function () {
      sec8_3.classList.add("scrollArrive");
    }, 400);
  }
});
