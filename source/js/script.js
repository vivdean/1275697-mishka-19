var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--hide");
});

var link = document.querySelectorAll(".button--order");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal__button");
var input = modal.querySelector("[name=size]");


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  input.focus();
  });
}

close.addEventListener("click", function () {
  modal.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});
