function generateLoremIpsum() {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let repeatCount = 5;  // Ubah jumlah pengulangan sesuai keinginan
    let result = "";

    for (let i = 0; i < repeatCount; i++) {
        result += lorem + " ";
    }

    document.getElementById("loremText").innerText = result;
}
