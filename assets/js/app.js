// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/app.css';

import Swiper from 'swiper';

// Import JS
import menuOpen from './utils/menuOpen';
import infiniteScroll from './utils/infiniteScroll';

// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

const recentSwiper = new Swiper('.js-recent-slider', {
    modules: [],
    freeMode: true,
    slidesPerView: 'auto',
    a11y: true,
    on: {
        init: function () {
            shave('.js-recent-article-title', 50);
        },
    },
});
