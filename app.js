/* Imports */

/* Get DOM Elements */
const home = document.getElementById('home-link');
const aboutMe = document.getElementById('about-me-link');
const gallery = document.getElementById('gallery-link');
const recipe = document.getElementById('recipe-link');
const contact = document.getElementById('contact-link');
/* State */

/* Events */

/* Display Functions */
function updateNavBar() {
    const page = document.URL;
    switch (page) {
        case 'index':
            aboutMe.classList.add('nav-bar');
            break;
        case 'about-me':
            aboutMe.classList.add('nav-bar');
            break;
        case 'gallery':
            aboutMe.classList.add('nav-bar');
            break;
        case 'recipe':
            aboutMe.classList.add('nav-bar');
            break;
        case 'about=me':
            aboutMe.classList.add('nav-bar');
            break;
        case 'contact':
            aboutMe.classList.add('nav-bar');
            break;
    }
    if (document.URL.includes('about-me.html')) {
        aboutMe.classList.add('nav-bar');
    }
}
updateNavBar();
