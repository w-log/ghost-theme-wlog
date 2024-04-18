// Import CSS
import '../css/app.css';

// Import JS
import setupMenu from './utils/setupMenu';
import setupPost from './utils/setupPost';
import setupSwiper from './utils/setupSwiper';
import setupSwup from './utils/setupSwup';

const onLoad = () => {
    setupMenu();
    setupSwiper();
    setupSwup();
    setupPost();
};

document.addEventListener('DOMContentLoaded', onLoad);
