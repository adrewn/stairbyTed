"use strict";
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotsContainter = document.querySelector(".dots");
  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  //Event handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if ((e.key = "ArrowLeft")) prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

slider();

/*Sticky bar navigation*/
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/*Page navigation*/
document.querySelector("#nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".btn-show-me").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(".section-services")
    .scrollIntoView({ behavior: "smooth" });
});

/*mobile navigation button*/
const main_nav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");

function mobileMenu() {
  hamburger.classList.toggle("active");
  main_nav.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  main_nav.classList.remove("active");
}
