const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector(".nav-links");
if (hamburger == null || navlinks == null) throw new Error("hamburg or navlink is null :(");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('expanded');
});