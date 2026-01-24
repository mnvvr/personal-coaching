/**
 * BetterHealth Edge - Main JavaScript File
 * Initializes all modules and coordinates functionality
 */

// Initialize modules when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('BetterHealth Edge - Initializing...');

    // Import and initialize modules
    if (typeof initNavigation === 'function') {
        initNavigation();
    }

    if (typeof initCarousel === 'function') {
        initCarousel();
    }

    if (typeof initAnimations === 'function') {
        initAnimations();
    }

    if (typeof initLoader === 'function') {
        initLoader();
    }

    console.log('BetterHealth Edge - Ready!');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        // Handle responsive adjustments
        console.log('Window resized');
    }, 250);
});
