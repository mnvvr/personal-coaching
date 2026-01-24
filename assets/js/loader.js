/**
 * Loader Module
 * Handles opening animation (donk loader)
 * Currently disabled - set to display none in CSS
 */

function initLoader() {
    const donkLoader = document.getElementById('donkLoader');

    if (!donkLoader) {
        console.warn('Donk loader element not found');
        return;
    }

    // Wait for page load completion then fade out
    window.addEventListener('load', function () {
        // Delay fade out for visual effect
        setTimeout(function () {
            if (donkLoader.style.display !== 'none') {
                donkLoader.classList.add('fade-out');

                // Hide after animation completes
                setTimeout(function () {
                    donkLoader.style.display = 'none';
                }, 600);
            }
        }, 2000);
    });
}

/**
 * Restore Loader (for future use)
 * To enable the loader, call this function:
 * restoreLoader();
 */
function restoreLoader() {
    const donkLoader = document.getElementById('donkLoader');
    if (donkLoader) {
        donkLoader.style.display = 'flex';
        donkLoader.classList.remove('fade-out');
    }
}

/**
 * Remove Loader (for permanent deletion)
 * To remove the loader element from DOM:
 * removeLoader();
 */
function removeLoader() {
    const donkLoader = document.getElementById('donkLoader');
    if (donkLoader) {
        donkLoader.remove();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initLoader, restoreLoader, removeLoader };
}
