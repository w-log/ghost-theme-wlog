// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/app.css';

import Swiper from 'swiper';

// Import JS
import setupMenu from './utils/setupMenu';
// import infiniteScroll from './utils/infiniteScroll';

document.addEventListener('DOMContentLoaded', () => {
    // infiniteScroll();
    setupMenu();
});
