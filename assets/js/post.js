export const hydratePost = () => {
    const post = document.querySelector('.post');
    if (post) {
        const postContent = post.querySelector('.post-content');
        const postContentText = postContent.innerText;
        postContent.innerHTML = postContentText;
    }
};
