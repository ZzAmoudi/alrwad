document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 1,
    focus: "center",
    autoplay: true,
    interval: 2000,
    // flickMaxPages: 1,
    updateOnMove: true,
    // padding: "10%",
    throttle: 300,
  }).mount();
});
