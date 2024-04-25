/**
 * Sets up Swup for smooth page transitions and initializes various plugins.
 */
import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import FragmentPlugin from '@swup/fragment-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';
import SwupOverlayTheme from '@swup/overlay-theme';

import setupPost from './setupPost';
import setupSwiper from './setupSwiper';
import setupLetter from './setupLetter';
import { updateActiveMenu } from './setupMenu';

/**
 * Initializes Swup and its plugins.
 */
export default function setupSwup() {
    /**
     * Creates a new instance of Swup.
     */
    const swup = new Swup({
        containers: ['#swup'],
        cache: true,
        linkSelector:
            'a[href^="' +
            window.location.origin +
            '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
        plugins: [
            /**
             * Adds an overlay theme to the page transitions.
             */
            new SwupOverlayTheme({
                direction: 'to-right',
            }),
            /**
             * Adds a progress bar to indicate the loading progress of the page.
             */
            new SwupProgressPlugin(),
            /**
             * Adds a body class to the page based on the current URL.
             */
            new SwupBodyClassPlugin(),
            /**
             * Persists the assets (e.g., scripts, stylesheets) when navigating between pages.
             */
            new SwupHeadPlugin({
                persistAssets: true,
            }),
            /**
             * Handles fragment-based transitions for specific URLs.
             */
            new FragmentPlugin({
                debug: process.env.NODE_ENV === 'development',
                rules: [
                    {
                        from: ['/tag/:slug', '/blog/'],
                        to: ['/tag/:slug', '/blog/'],
                        containers: ['#category-post-list'],
                    },
                ],
            }),
        ],
    });

    /**
     * Executes the specified functions when a new page is viewed.
     */
    swup.hooks.on('page:view', () => {
        updateActiveMenu(window.location.pathname);
        setupPost(true);
        setupSwiper();
        setupLetter();
    });
}
