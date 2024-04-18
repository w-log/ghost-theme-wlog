import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';

import setupPost from './setupPost';
import setupSwiper from './setupSwiper';
import { updateActiveMenu } from './setupMenu';

export default function setupSwup() {
    const swup = new Swup({
        containers: ['#swup'],
        cache: true,
        linkSelector:
            'a[href^="' +
            window.location.origin +
            '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
        plugins: [
            new SwupBodyClassPlugin(),
            new SwupHeadPlugin({
                persistAssets: true,
            }),
        ],
    });

    swup.hooks.on('page:view', () => {
        updateActiveMenu(window.location.pathname);
        setupPost();
        setupSwiper();
    });
}
