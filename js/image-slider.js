var splide = new Splide(".splide", {
  type: "loop",
  gap: "2rem",
  padding: "2rem",
  focus: "center",
  drag: "free",
  lazyLoad: "nearby",
  perPage: 3,
  perMove: 1,
  autoplay: true,
  wheel: true,
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount();
