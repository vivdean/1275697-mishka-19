var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--hide");
});

var link = document.querySelectorAll(".button--order");
var popup = document.querySelector(".modal__content");
var close = popup.querySelector(".modal__button");
var input = popup.querySelector("[name=size]");


link.forEach(function (enter) {
  enter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__content--show");
  input.focus();
  });
});

close.addEventListener("click", function () {
  popup.classList.remove("modal__content--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
    }
  }
});
