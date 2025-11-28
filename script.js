import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

new Swiper(".partners__swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 32,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

new Swiper(".testimonial__swiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

console.log("working");
