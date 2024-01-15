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
