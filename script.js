let menuBtn = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-xmark");
  navBar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuBtn.classList.remove("fa-xmark");
  navBar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact form",
  { origin: "right" }
);
ScrollReveal().reveal(".home-contact  h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact,.about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Frontend Developer", "Full Stack Developer"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
