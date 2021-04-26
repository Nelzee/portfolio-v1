const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const list = document.querySelectorAll(".nav__menu ul li a");
const nav__menu = document.querySelector(".nav__menu");
const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#aboutMe");
const contactMe = document.querySelector("#contactMe");

const mobileMenu = () => {
  body.classList.toggle("scroll__lock");
  nav__menu.classList.toggle("active");
};

const mobile = () => {
  nav__menu.classList.toggle("active");
  body.classList.remove("scroll__lock");
};

window.addEventListener("scroll", () => {
  if (home.getBoundingClientRect().top <= 1) {
    list.forEach((item) => {
      if (item.hash === "#home") {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }
  if (projects.getBoundingClientRect().top <= 1) {
    list.forEach((item) => {
      if (item.hash === "#projects") {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }
  if (aboutMe.getBoundingClientRect().top <= 100) {
    list.forEach((item) => {
      if (item.hash === "#aboutMe") {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }
  if (contactMe.getBoundingClientRect().top <= 100) {
    list.forEach((item) => {
      if (item.hash === "#contactMe") {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }
});

toggle.addEventListener("click", mobileMenu);
list.forEach((item) => {
  item.addEventListener("click", mobile);
});
