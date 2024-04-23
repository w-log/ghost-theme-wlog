export const lockBodyScroll = () => {
    return (
        !document.body.classList.contains('overflow-hidden') &&
        document.body.classList.add('overflow-hidden')
    );
};

export const unlockBodyScroll = () => {
    return (
        document.body.classList.contains('overflow-hidden') &&
        document.body.classList.remove('overflow-hidden')
    );
};

const toSpan = (text, index) => {
    const node = document.createElement('span');
    node.textContent = text;
    node.style.setProperty('--index', index);

    return node;
};

export const byLetter = (text) => [...text].map(toSpan);

export const byWord = (text) => text.split(' ').map(toSpan);
