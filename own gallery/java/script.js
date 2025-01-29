
// Lightbox configuration
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'positionFromTop': 100,
    'disableScrolling': true,
    'albumLabel': 'Mountain Image %1 of %2' // Better accessibility
});

// Background images with corrected paths
const backgroundImages = [
    "images/alps.jpg",
    "images/mountain.jpg",
    "images/mountains_pana.webp", // Fixed typo
    "images/mushroom.webp",
    "images/purple-flower.jpg",
    "images/tea_garden.jpg",
    "images/trees.jpg",
    "images/valley.jpg"
];

function setRandomBackground() {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = "cover"; // Ensure full coverage
}

// Initialize with fallback
setRandomBackground();
const bgInterval = setInterval(setRandomBackground, 10000);

// Cleanup on page unload (optional but recommended)
window.addEventListener('beforeunload', () => {
    clearInterval(bgInterval);
});