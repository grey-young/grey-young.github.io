// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const icon = this.querySelector("i");

      if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      } else {
        mobileMenu.style.display = "block";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".navbar") &&
        !event.target.closest(".mobile-menu")
      ) {
        mobileMenu.style.display = "none";
        if (menuToggle.querySelector("i")) {
          menuToggle.querySelector("i").classList.remove("fa-times");
          menuToggle.querySelector("i").classList.add("fa-bars");
        }
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");
      });
    });
  }
});
