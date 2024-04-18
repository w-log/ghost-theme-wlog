import * as tocbot from 'tocbot';

export default function setupPost() {
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
        includeTitleTags: true,
    });
}
