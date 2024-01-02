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

let currentImage = 0;

function showNextImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = images[currentImage];

    currentImage++;
    if (currentImage >= images.length) {
        clearInterval(intervalId); // Clear the interval
        window.location.href = "signup.html"; // Redirect after last image
    }
}

const intervalId = setInterval(showNextImage, 200); // Change image every 200 milliseconds