/* Imports */

/* Get DOM Elements */
const home = document.getElementById('home-link');
const aboutMe = document.getElementById('about-me-link');
const gallery = document.getElementById('gallery-link');
const recipes = document.getElementById('recipe-link');
const contact = document.getElementById('contact-link');
/* State */

/* Events */

/* Display Functions */
function updateNavBar() {
    const page = document.URL;

    // switch (page) {
    //     case document.URL.includes('/index.html'):
    //         home.classList.add('nav-bar');
    //         break;
    //     case document.url.includes('about-me'):
    //         aboutMe.classList.add('nav-bar');
    //         break;
    //     case 'gallery.html':
    //         gallery.classList.add('nav-bar');
    //         break;
    //     case 'recipe':
    //         recipes.classList.add('nav-bar');
    //         break;
    //     case 'contact':
    //         contact.classList.add('nav-bar');
    // }
    if (document.URL.includes('index.html')) {
        home.classList.add('nav-bar');
    } else if (document.URL.includes('about-me.html')) {
        aboutMe.classList.add('nav-bar');
    } else if (document.URL.includes('gallery.html')) {
        gallery.classList.add('nav-bar');
    } else if (document.URL.includes('recipes.html')) {
        recipes.classList.add('nav-bar');
    } else if (document.URL.includes('contact.html')) {
        contact.classList.add('nav-bar');
    }
}
updateNavBar();
