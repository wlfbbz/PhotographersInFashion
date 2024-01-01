    window.onload = function() {
        var currentIndex = 15;
        var images = document.querySelectorAll('.container .image-box');
        var interval = 200; // Interval in milliseconds
        var totalImages = images.length;
        var imagesShown = 0;

        function showNextImage() {
            // Hide the current image
            if (currentIndex < images.length) {
                images[currentIndex].style.display = 'none';
            }

            // Increment the index and the counter
            currentIndex++;
            imagesShown++;

            if (currentIndex >= images.length) {
                if (imagesShown >= totalImages) {
                    // Redirect to a new page after the last image
                    window.location.href = 'signup.html'; // Change to your desired URL
                    return;
                }
                currentIndex = 0;
            }

            // Show the next image
            images[currentIndex].style.display = 'block';
        }

        // Initially show the first image and hide others
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });

        // Set the interval for the slideshow
        setInterval(showNextImage, interval);
    };
