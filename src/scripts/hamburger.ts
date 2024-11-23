const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector(".nav-links");
if (hamburger == null || navlinks == null) throw new Error("hamburg or navlink is null :(");

document.addEventListener('astro:page-load', () => {
    hamburger.addEventListener('click', () => {
        navlinks.classList.toggle('expanded');
    });
});