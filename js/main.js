$(document).ready(function () {
  /***** Works slider *****/
  var WorksSwiper = new Swiper(".works-slider .swiper", {
    // loop: true,

    navigation: {
      nextEl: ".slider-tools .swiper-button-next",
      prevEl: ".slider-tools .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });

  /***** blog slider *****/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    // loop: true,
    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });

  $(".menu-btn").on("click", function (e) {
    $(".header-nav").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".menu-cont").toggleClass("active");
    $(".menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".header-nav").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".menu-cont").removeClass("active");
    $(".menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
});
