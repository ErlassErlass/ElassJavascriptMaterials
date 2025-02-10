let reviews = [
    { name: "Alice", text: "Great service and quality!" },
    { name: "Bob", text: "Highly recommend this product." },
    { name: "Charlie", text: "Worth every penny!" }
];

let currentIndex = 0;

function showReview(index) {
    document.getElementById("name").innerText = reviews[index].name;
    document.getElementById("text").innerText = reviews[index].text;
}

document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
    showReview(currentIndex);
});

document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
    showReview(currentIndex);
});

showReview(currentIndex);
