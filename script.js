let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("image-box");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
        slideIndex++;
    if (slideIndex > slides.length) {
        // Redirect to a new page when the slideshow ends
        window.location.href = "signup.html"; // Change this URL to your desired location
        return; // Stop the function from continuing
    }    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 3 seconds
}
