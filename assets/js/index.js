// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.css';

import Swiper from 'swiper';

// append Script
import './post'; //post.js

// Import JS
import menuOpen from './utils/menuOpen';
import infiniteScroll from './utils/infiniteScroll';

// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

const recentSwiper = new Swiper('.js-recent-slider', {
    modules: [FreeMode, A11y],
    freeMode: true,
    slidesPerView: 'auto',
    a11y: true,
    on: {
        init: function () {
            shave('.js-recent-article-title', 50);
        },
    },
});
