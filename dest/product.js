function goPage(url) {
  var a = "http://" + window.location.host + "/index.html" + url;
  console.log("====================================");
  console.log(a);
  console.log("====================================");
  window.location.href = a;
}

$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("activeHamburger");
  $(".menuMobile").toggleClass("menuMobile-active");
  $(".header-full").toggleClass("colorWhenMenuActive");
  var main = $("main");
  var body = $("body");
  main.toggleClass("bodyActive");
  body.toggleClass("fixed-position");
});
$(".menuMobile ul li a").on("click", function () {
  var main = $("main");
  var body = $("body");
  main.removeClass("bodyActive");
  body.removeClass("fixed-position");
  $(".hamburger").removeClass("activeHamburger");
  $(".menuMobile").removeClass("menuMobile-active");
  $(".header-full").removeClass("colorWhenMenuActive");
});

//slider
$(".info .image").flickity({
  cellAlign: "center",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: false,
});

$(".introduce .image").flickity({
  cellAlign: "center",
  contain: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: false,
  verticalCells: true,
  wrapAround: true,
  cellAlign: "left",
  on: {
    ready: function (index) {},
    change: function (index) {
      let activeSlider = $(".detail-child");
      activeSlider.eq(index).addClass("active");
      activeSlider.eq(index).siblings().removeClass("active");
    },
  },
});
$(".bannerKIA .img").flickity({
  cellAlign: "center",
  contain: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: false,
  verticalCells: true,
  wrapAround: true,
  cellAlign: "left",
  on: {
    ready: function (index) {},
    change: function (index) {},
  },
});
$(".container .back").on("click", function () {
  $([document.documentElement, document.body]).animate(
    { scrollTop: 0 },
    "5000"
  );
});
