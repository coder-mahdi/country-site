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

function checkScreenSize() {
    if (window.innerWidth >= 50 * 16) { // 50em in pixels
        links.classList.add('toggled');
        button.style.display = 'none';
    } else {
        links.classList.remove('toggled');
        button.style.display = 'block';
    }
}

checkScreenSize();

// Add event listener for window resize
window.addEventListener('resize', checkScreenSize);