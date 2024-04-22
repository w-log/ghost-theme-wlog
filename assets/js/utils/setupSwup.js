import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import FragmentPlugin from '@swup/fragment-plugin';

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
            new FragmentPlugin({
                debug: process.env.NODE_ENV === 'development',
                rules: [
                    {
                        from: ['/tag/:slug', '/blog/'],
                        to: ['/tag/:slug', '/blog/'],
                        containers: ['#category-post-list'],
                        // scroll: '#category-post-list',
                    },
                ],
            }),
        ],
    });

    swup.hooks.on('page:view', () => {
        updateActiveMenu(window.location.pathname);
        setupPost(true);
        setupSwiper();
    });
}
