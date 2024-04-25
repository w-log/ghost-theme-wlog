/**
 * Sets up pagination functionality for a post list.
 * When the "Load More" button is clicked, it fetches the HTML content of the next page and appends the posts to the current list.
 * @module setupPagination
 */

let isLoading = false;

/**
 * Fetches the HTML content of a post list from the specified URL.
 * @param {string} url - The URL to fetch the post list from.
 * @returns {Promise<string>} - A promise that resolves to the HTML content of the post list.
 */
const fetchPostListHtml = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

/**
 * Appends the posts from the fetched HTML to the current post list.
 * @param {string} html - The HTML content of the fetched post list.
 * @returns {string|null} - The URL of the next page, or null if there is no next page.
 */
const appendPosts = (html) => {
    const parse = document.createRange().createContextualFragment(html);

    const $virtualPosts = parse.querySelectorAll('#category-post-list .post');
    const $currentPosts = document.querySelector(
        '#category-post-list .wl-postfeed-row',
    );

    if ($currentPosts && $virtualPosts?.length) {
        $currentPosts.append(...$virtualPosts);
    }

    return parse.querySelector('#load-more')?.dataset.nextPage;
};

/**
 * Sets up the pagination functionality.
 * Listens for click events on the "Load More" button and fetches the next page of posts.
 */
export default function setupPagination() {
    document.addEventListener('click', async (e) => {
        if (!e.target.closest('#load-more') || isLoading) return;

        const $loadMore = e.target.closest('#load-more');
        isLoading = true;
        const buttonHTML = $loadMore.innerHTML;
        $loadMore.disabled = true;
        $loadMore.innerHTML = $loadMore.dataset.loadingText;

        const requestPageURL = $loadMore.dataset.nextPage;

        try {
            const html = await fetchPostListHtml(requestPageURL);
            const nextPage = appendPosts(html);
            if (!nextPage) {
                $loadMore.remove();
            } else {
                $loadMore.disabled = false;
                $loadMore.innerHTML = buttonHTML;
                $loadMore.dataset.nextPage = nextPage;
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading = false;
        }
    });
}
