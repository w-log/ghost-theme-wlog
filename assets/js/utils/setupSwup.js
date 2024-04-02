import Swup from 'swup';
import FragmentPlugin from '@swup/fragment-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';

import setupPost from './setupPost';
import setupSwiper from './setupSwiper';
import setupMenu from './setupMenu';

export default function setupSwup() {
    const swup = new Swup({
        containers: ['#swup'],
        cache: true,
        plugins: [
            new SwupBodyClassPlugin(),
            new SwupHeadPlugin({
                persistAssets: true,
            }),
            new FragmentPlugin({
                debug: process.env.NODE_ENV === 'development',
                rules: [
                    {
                        from: ['/resume/'],
                        to: '/:slug/',
                        containers: ['#post'],
                        name: 'open-post',
                    },
                    {
                        from: '/:slug/',
                        to: ['/resume/'],
                        containers: ['#post'],
                        name: 'close-post',
                    },
                    {
                        from: '/:slug/',
                        to: '/:slug/',
                        containers: ['#post-content'],
                    },
                ],
            }),
        ],
    });

    swup.hooks.on('page:view', () => {
        setupMenu();
        setupPost();
        setupSwiper();
    });
}
