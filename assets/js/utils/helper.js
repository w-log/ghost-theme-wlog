/**
 * Locks the body scroll by adding the 'overflow-hidden' class to the document body.
 * @returns {boolean} - Returns true if the 'overflow-hidden' class is added successfully, false otherwise.
 */
export const lockBodyScroll = () => {
    return (
        !document.body.classList.contains('overflow-hidden') &&
        document.body.classList.add('overflow-hidden')
    );
};

/**
 * Enables scrolling on the body element by removing the 'overflow-hidden' class.
 * @returns {boolean} - Returns true if the 'overflow-hidden' class was removed, false otherwise.
 */
export const unlockBodyScroll = () => {
    return (
        document.body.classList.contains('overflow-hidden') &&
        document.body.classList.remove('overflow-hidden')
    );
};

/**
 * Creates a new span element with the given text and index.
 *
 * @param {string} text - The text content of the span element.
 * @param {number} index - The index value to set as a CSS custom property.
 * @returns {HTMLSpanElement} The newly created span element.
 */
const toSpan = (text, index) => {
    const node = document.createElement('span');
    node.textContent = text;
    node.style.setProperty('--index', index);

    return node;
};

/**
 * Maps each letter of the given text to a <span> element.
 *
 * @param {string} text - The text to be mapped.
 * @returns {Array} An array of <span> elements representing each letter of the text.
 */
export const byLetter = (text) => [...text].map(toSpan);

/**
 * Splits the given text by spaces and maps each word to a span element.
 * @param {string} text - The text to be split.
 * @returns {Array} An array of span elements.
 */
export const byWord = (text) => text.split(' ').map(toSpan);
