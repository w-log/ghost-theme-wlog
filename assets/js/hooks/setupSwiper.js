/**
 * Sets up the Swiper slider.
 */
import Swiper from 'swiper';

export default function setupSwiper() {
    // resume slider
    new Swiper('.js-related-slider', {
        slidesPerView: 1.6,
        spaceBetween: 16,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + '</span>'
                );
            },
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
            },
        },
    });
}
