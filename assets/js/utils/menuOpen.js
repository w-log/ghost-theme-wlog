// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.wl-burger');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('wl-head-open');
    });
}
