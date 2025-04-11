document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("homeCarousel");
  const elements = document.querySelectorAll(".text-content *");

  // Reset animation on each slide
  carousel.addEventListener("slide.bs.carousel", (event) => {
    elements.forEach((el) => {
      el.classList.remove("animate__fadeIn");
      void el.offsetWidth; // Trigger reflow
      el.classList.add("animate__fadeIn");
    });
  });

  // Initial animation
  elements.forEach((el) => el.classList.add("animate__fadeIn"));
});
