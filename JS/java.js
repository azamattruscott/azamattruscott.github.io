const hamburger = document.querySelector(".hamburger");
const navLinksA = document.querySelector(".nav-links-A");
const navLinksB = document.querySelector(".nav-links-B");
const links = document.querySelectorAll(".nav-links-A li");

hamburger.addEventListener("click", () => {
  navLinksA.classList.toggle("open");
  navLinksB.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
