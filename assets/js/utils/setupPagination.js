let isLoading = false;

const fetchPosts = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

const appendPosts = (html) => {
    const parse = document.createRange().createContextualFragment(html);
    const postContainerSelector = '#category-post-list .wl-postfeed-row';
    const $virtualPosts = parse.querySelectorAll('#category-post-list .post');

    const $currentPosts = document.querySelector(postContainerSelector);

    if ($virtualPosts && $currentPosts) {
        $currentPosts.append(...$virtualPosts);
    }

    return parse.querySelector('#load-more')?.dataset.nextPage;
};

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
            const html = await fetchPosts(requestPageURL);
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
