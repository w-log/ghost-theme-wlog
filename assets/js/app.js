// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/app.css';

// Import JS
import './post';
import setupMenu from './utils/setupMenu';
import setupPost from './utils/setupPost';
import setupSwiper from './utils/setupSwiper';
import setupSwup from './utils/setupSwup';
// import infiniteScroll from './utils/infiniteScroll';

const onLoad = () => {
    // infiniteScroll();
    setupMenu();
    setupSwiper();
    setupSwup();
    setupPost();
};

document.addEventListener('DOMContentLoaded', onLoad);
