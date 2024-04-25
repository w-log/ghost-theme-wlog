// Import CSS
import '../css/app.css';

// Import JS
import setupLetter from './hooks/setupLetter';
import setupMenu from './hooks/setupMenu';
import setupPagination from './hooks/setupPagination';
import setupPost from './hooks/setupPost';
import setupSwiper from './hooks/setupSwiper';
import setupSwup from './hooks/setupSwup';

// On load
const onLoad = () => {
    setupMenu();
    setupSwiper();
    setupSwup();
    setupPost(false);
    setupPagination();
    setupLetter();
};

// Run once when page loads
if (document.readyState === 'complete') {
    onLoad();
} else {
    document.addEventListener('DOMContentLoaded', () => onLoad());
}
