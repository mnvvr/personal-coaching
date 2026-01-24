/**
 * Carousel Module
 * Handles approach carousel navigation
 */

function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');

    let currentIndex = 0;

    if (!carouselItems.length) {
        console.warn('No carousel items found');
        return;
    }

    // Show specific carousel item
    function showItem(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                item.style.opacity = '1';
            } else {
                item.classList.remove('active');
                item.style.opacity = '0';
            }
        });
    }

    // Go to next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    // Go to previous item
    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    }

    // Event listeners
    if (prevButton) {
        prevButton.addEventListener('click', prevItem);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextItem);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevItem();
        } else if (e.key === 'ArrowRight') {
            nextItem();
        }
    });

    // Initialize first item
    showItem(0);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initCarousel };
}
