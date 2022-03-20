/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport using getBoundingClientRect() methode

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    const topOfSection = section.getBoundingClientRect().top;
    const linkHref = document.querySelector(`a[href="#${section.id}"]`);

    if (topOfSection > -90 && topOfSection <= 300) {
      section.classList.add("your-active-class");
      linkHref.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      linkHref.classList.remove("active");
    }
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu

const allSections = document.querySelectorAll("section");
const firstUl = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
//Loop through all sections
for (const section of allSections) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = `#${section.id}`;
  a.textContent = section.dataset.nav;
  a.classList.add("menu__link");

  li.appendChild(a);
  fragment.appendChild(li);

  // Scroll to anchor ID using scrollIntoView event
  li.addEventListener("click", (ev) => {
    ev.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
}
firstUl.appendChild(fragment);

// Scroll to section on link click

// Set sections as active
