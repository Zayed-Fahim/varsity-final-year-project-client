const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav .nav-menu ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });
  navList.forEach((list) => {
    list.classList.remove("active");
    if (list.classList.contains(current)) {
      list.classList.add("active");
    }
  });
});
