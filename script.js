document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");

      sections.forEach(section => {
        if (section.id === target) {
          section.classList.add("visible");
          section.classList.remove("hidden");

          // Reiniciar animación fade
          section.classList.remove("fade");
          void section.offsetWidth; // reflow para reiniciar animación
          section.classList.add("fade");
        } else {
          section.classList.remove("visible", "fade");
          section.classList.add("hidden");
        }
      });
    });
  });
});
