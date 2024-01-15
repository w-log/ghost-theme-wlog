import { lockBodyScroll, unlockBodyScroll } from './helper';

// Toggle the menu open and close when on mobile
export default function setupMenu() {
    const initialTheme = document.documentElement.getAttribute('data-theme');

    const $mobileMenu = document.getElementById('wl-mobile-menu');
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
                $mobileMenu.classList.remove('is-active');
                unlockBodyScroll();
            } else {
                $mobileMenu.classList.add('is-active');
                lockBodyScroll();
            }
        });
    });

    $mobileMenuCloses.forEach(function ($close) {
        $close.addEventListener('click', function () {
            $mobileMenu.classList.remove('is-active');
            unlockBodyScroll();
        });
    });

    $mobileMenuDim.addEventListener('click', function () {
        $mobileMenu.classList.remove('is-active');
        unlockBodyScroll();
    });
}
