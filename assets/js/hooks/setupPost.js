import * as tocbot from 'tocbot';

// delegate 한번만 수행되도록 하는 변수
let isSetupDelegate = false;

const GHOST_CARD_TOGGLE_SELECTOR = [
    '.kg-toggle-heading, .kg-toggle-card-icon, kg-toggle-card',
].join(', ');

export const setupDelgate = () => {
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
 *
 * @param {boolean} isDelegate run delegate event flag
 * @returns
 */
export default function setupPost(isDelegate = false) {
    const $postTemplate = document.querySelector('.post-template');

    if (!$postTemplate) {
        return;
    }

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

    if (isDelegate) setupDelgate();
}
