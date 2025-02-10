function getRandomPastelColor() {
    // Generate RGB values for pastel tones (high values for softer colors)
    const red = Math.floor(Math.random() * 56) + 200; // Random between 200-255
    const green = Math.floor(Math.random() * 56) + 200; // Random between 200-255
    const blue = Math.floor(Math.random() * 56) + 200; // Random between 200-255

    // Convert RGB to hex
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomPastelColor();
});


//function getRandomHexColor() {
    // Generate a random hex color by getting a random number between 0 and 16777215, then converting it to hex
    //return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//}

//document.getElementById("colorButton").addEventListener("click", function() {
    //document.body.style.backgroundColor = getRandomHexColor();
//});
