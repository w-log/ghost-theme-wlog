import { lockBodyScroll, unlockBodyScroll } from '../utils/helper';

const $mobileMenu = document.getElementById('wl-mobile-menu');

const closeMenu = () => {
    $mobileMenu.classList.remove('is-active');
    unlockBodyScroll();
};

const openMenu = () => {
    $mobileMenu.classList.add('is-active');
    lockBodyScroll();
};

// Toggle the menu open and close when on mobile
export default function setupMenu() {
    const initialTheme = document.documentElement.getAttribute('data-theme');

    const $mobileMenuToggles = document.querySelectorAll(
        '.js-mobile-menu-toggle',
    );
    const $mobileMenuCloses = document.querySelectorAll(
        '.js-mobile-menu-close',
    );

    const $darkModeToggles = document.querySelectorAll('.js-toggle-darkmode');
    const $mobileMenuDim = document.querySelector('.wl-mobile-menu-dim');

    // setup darkmode toggles
    $darkModeToggles.forEach(function ($toggle) {
        $toggle.checked = initialTheme === 'dark';
        $toggle.addEventListener('change', function () {
            const theme = this.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });

    // Toggle the menu open and close when on mobile
    $mobileMenuToggles.forEach(function ($toggle) {
        $toggle.addEventListener('click', function () {
            if ($mobileMenu.classList.contains('is-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    });

    $mobileMenuCloses.forEach(($close) =>
        $close.addEventListener('click', closeMenu),
    );
    $mobileMenuDim.addEventListener('click', closeMenu);

    // add state change close menu
    window.onpopstate = () => {
        $mobileMenu.classList.remove('is-active');
        unlockBodyScroll();
    };
}

export const updateActiveMenu = (currentPathname) => {
    const $menuItems = document.querySelectorAll('.nav a');

    $menuItems.forEach(($item) => {
        const itemPathname = new URL($item.getAttribute('href')).pathname;
        if (itemPathname === currentPathname) {
            $item.closest('[class^="nav"]')?.classList.add('nav-current');
        } else {
            $item.closest('[class^="nav"]')?.classList.remove('nav-current');
        }
    });

    closeMenu();
};
