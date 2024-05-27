// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const links = document.getElementById("main-nav-list");
const banner = document.querySelector('.banner');

button.addEventListener('click', function() {
    links.classList.toggle('toggled');
    if(banner) {
        banner.classList.toggle('toggled');
    }
})
