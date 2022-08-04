const h1 = document.querySelector(".heading-primary");

// h1.addEventListener("click", () => {
//   h1.textContent = "Yusa Ozturk";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////
// Smooth scrolloing animaiton

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//Sticky nav

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

////////////////////////////////////////////////////////////////
