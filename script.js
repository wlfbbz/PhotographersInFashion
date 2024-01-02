const images = [
'bailey.png',
'faye.png',
'irving.png',
'herbert.png',
'kate.png',
'testino.png',
'herbert2.png',
'naomi.png',
'testino3.png',
'andy.png',
'sarah.png',
'jeurgen.png',
'karl.png',
'naomi2.png',
'picasso.png',
    // ... add all 15 image paths
];

const preloadedImages = [];
let currentImage = 0;

// Preload images
for (const src of images) {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
}

function showNextImage() {
    if (currentImage >= images.length) {
        window.location.href = "signup.html"; // URL of the new page
        return;
    }

    const imgElement = document.getElementById('image');
    imgElement.src = preloadedImages[currentImage].src;
    currentImage++;
}

// Start the slideshow
setInterval(showNextImage, 150); // Change image every 150 milliseconds