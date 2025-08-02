/**
 * Smooth scroll to a specific section on the page
 * @param sectionId - The data-section attribute value or element ID
 * @param offset - Optional offset from the top (default: 80px for header)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`) ||
        document.getElementById(sectionId);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Scroll to the top of the page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

/**
 * Check if an element is in the viewport
 * @param element - The element to check
 * @returns boolean indicating if element is visible
 */
export const isElementInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
