import { byLetter, byWord } from '../utils/helper';

const { matches: motionOK } = window.matchMedia(
    '(prefers-reduced-motion: no-preference)',
);

/**
 * Sets up letter animation for elements with data-split-by attribute.
 * @returns {void}
 */
export default function setupLetter() {
    if (!motionOK) return;
    const splitTargets = document.querySelectorAll('[data-split-by]');

    splitTargets.forEach((node) => {
        const type = node.dataset.splitBy;
        const rendered = node.dataset.rendered;
        let nodes = null;

        if (rendered) return;

        if (type === 'letter') nodes = byLetter(node.innerText);
        else if (type === 'word') nodes = byWord(node.innerText);

        if (nodes) node.firstChild.replaceWith(...nodes);

        node.dataset.rendered = true;
    });
}
