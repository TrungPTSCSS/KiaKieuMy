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
$(".container .back").on("click", function () {
  $([document.documentElement, document.body]).animate(
    { scrollTop: 0 },
    "5000"
  );
});
// $(".infor p").tilt({});

