const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.png"];
let currentIndex = 3;

function showImage(index) {
    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Optional: Auto-slide setiap 3 detik
setInterval(nextImage, 3000);
