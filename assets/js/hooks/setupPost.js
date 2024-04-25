/**
 * Imports the required modules for the script.
 */
import * as tocbot from 'tocbot';
import hljs from 'highlight.js';

let isSetupDelegate = false;

/**
 * The CSS selector for the elements that trigger the toggle card functionality.
 */
const GHOST_CARD_TOGGLE_SELECTOR = [
    '.kg-toggle-heading, .kg-toggle-card-icon, kg-toggle-card',
].join(', ');

/**
 * Sets up the delegate event for the toggle card functionality.
 */
const setupDelegateEvent = () => {
    if (isSetupDelegate) {
        return;
    }

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest(GHOST_CARD_TOGGLE_SELECTOR)) {
            const $dropdown = target.closest('.kg-toggle-card');

            const isOpen =
                $dropdown.getAttribute('data-kg-toggle-state') === 'open';
            $dropdown.setAttribute(
                'data-kg-toggle-state',
                isOpen ? 'close' : 'open',
            );
        }
    });

    isSetupDelegate = true;
};

/**
 * Sets up the script for the post detail page.
 * @param {boolean} isDelegate - Flag to determine whether to run the delegate event.
 */
export default function setupPost(isDelegate = false) {
    const $postTemplate = document.querySelector('.post-template');

    if (!$postTemplate) {
        return;
    }

    // table of contents
    tocbot.refresh({
        // Where to render the table of contents.
        tocSelector: '.wl-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.wl-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3, h4',
        // Ensure correct positioning
        hasInnerContainers: true,
        // includeTitleTags: true,
    });
    // code highlight
    hljs.highlightAll();

    if (isDelegate) setupDelegateEvent();
}
