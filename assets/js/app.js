// Import CSS
import '../css/app.css';

// Import JS
import setupMenu from './utils/setupMenu';
import setupPagination from './utils/setupPagination';
import setupPost from './utils/setupPost';
import setupSwiper from './utils/setupSwiper';
import setupSwup from './utils/setupSwup';

// On load

const onLoad = () => {
    setupMenu();
    setupSwiper();
    setupSwup();
    setupPost(false);
    setupPagination();
};

// document.addEventListener('DOMContentLoaded', onLoad);
onLoad();
