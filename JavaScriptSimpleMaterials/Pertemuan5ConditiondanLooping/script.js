let count = 0;

document.getElementById("increment").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = count;
});

document.getElementById("decrement").addEventListener("click", function() {
    if (count > 0) {
        count--;
    }
    document.getElementById("counter").innerText = count;
});

