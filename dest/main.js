setTimeout(function () {
  const loading = $(".loading");
  loading.addClass("activeLoading");
}, 1500);
// *******Slider*********
$(".slider .slider_container-img").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: false,
  on: {
    ready: function (index) {},
    change: function (index) {
      let pageNumber = $(".slider .slider_container .number");
      let indexPage = index + 1;
      pageNumber.text(indexPage.toString().padStart(2, 0));

      let activeSlider = $(".slider-info");
      activeSlider.eq(index).addClass("active");
      activeSlider.eq(index).siblings().removeClass("active");
      //   let content = $(".studySettle .content-study .paragraph-text");
      //   console.log(content);
      //   content.eq(index).addClass("active-content");
      //   content.eq(index).siblings("p").removeClass("active-content");
    },
  },
});
//Prev next
$(".prevnext .prev").on("click", function () {
  $(".slider .slider_container-img").flickity("previous");
});
$(".prevnext .next").on("click", function () {
  $(".slider .slider_container-img").flickity("next");
});
//parallax & menu mobile
if (window.innerWidth > 768) {
  var $carousel = $(".slider .slider_container-img").flickity();
  var flkty = $carousel.data("flickity");
  var $imgs = $(".img img");
  $carousel.on("scroll.flickity", function (event, progress) {
    flkty.slides.forEach(function (slide, i) {
      var img = $imgs[i];
      var x = ((slide.target + flkty.x) * -1) / 3;
      img.style.transform = "translateX( " + x + "px)";
    });
  });
}

//************************************* */

$(".product .kia-prod").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  //   asNavFor: '.product .prod_main',
  on: {
    ready: function (index) {},
    change: function (index) {
      //   let content = $(".studySettle .content-study .paragraph-text");
      //   console.log(content);
      //   content.eq(index).addClass("active-content");
      //   content.eq(index).siblings("p").removeClass("active-content");
    },
  },
});
$(".product .prod_main").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: false,
  autoPlay: 1500,
  pauseAutoPlayOnHover: true,
  on: {
    ready: function (index) {},
    change: function (index) {},
    dragMove: function (event, pointer, moveVector) {
      console.log("====================================");
      console.log(event, pointer, moveVector);
      console.log("====================================");
    },
  },
});
// $(".infor p").tilt({});

// //------------------------------------progress bar course ----------------------------------------
$(".product .prod_main")
  .flickity()
  .on("scroll.flickity", function (event, progress) {
    $(".bottom_scrollBar-progressBar").css({
      width: Math.max(0, Math.min(1, progress)) * 100 + "%",
    });
  });
$(".container .back").on("click", function () {
  $([document.documentElement, document.body]).animate(
    { scrollTop: 0 },
    "5000"
  );
});
// remove header
window.addEventListener("scroll", function () {
  var headerHalf = $(".header-half");
  var headerFull = $(".header-full");
  var heightScroll = document.documentElement.scrollTop;
  if (heightScroll / this.window.innerHeight >= 0.99) {
    headerHalf.removeClass("active");
    headerFull.addClass("active");
  } else {
    headerFull.removeClass("active");
    headerHalf.addClass("active");
  }
});
$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("activeHamburger");
  $(".menuMobile").toggleClass("menuMobile-active");
  $(".header-half").toggleClass("colorWhenMenuActive");
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
  $(".header-half").removeClass("colorWhenMenuActive");
  $(".header-full").removeClass("colorWhenMenuActive");
  console.log("====================================");
  console.log(main);
  console.log("====================================");
});

$(".blog .slider-blog").flickity({
  cellAlign: "center",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: true,
  pageDots: false,
  on: {
    ready: function (index) {},
    change: function (index) {
      //   let content = $(".studySettle .content-study .paragraph-text");
      //   console.log(content);
      //   content.eq(index).addClass("active-content");
      //   content.eq(index).siblings("p").removeClass("active-content");
    },
    dragMove: function (event, pointer, moveVector) {
      console.log("====================================");
      console.log(event, pointer, moveVector);
      console.log("====================================");
    },
  },
});
$(".sliderBlockMobile").flickity({
  cellAlign: "center",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: true,
  pageDots: false,
  autoPlay:false,
  on: {
    ready: function (index) {},
  },
});
