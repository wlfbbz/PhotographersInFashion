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
    if (currentImage >= images.length) {
         window.location.href = "signup.html"; // URL of the new page
        return;
    }


    const imgElement = document.getElementById('image');
    imgElement.src = images[currentImage++];
}

setInterval(showNextImage, 150); // Change image every 1.5 seconds