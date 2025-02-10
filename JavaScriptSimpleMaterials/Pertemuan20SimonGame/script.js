let gameSequence = [];
let userSequence = [];
let colors = ["green", "red", "yellow", "blue"];
let level = 0;

function startGame() {
    gameSequence = [];
    userSequence = [];
    level = 0;
    nextLevel();
}

function nextLevel() {
    level++;
    userSequence = [];
    document.getElementById("status").innerText = `Level ${level}`;
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);
    playSequence();
}

function playSequence() {
    gameSequence.forEach((color, index) => {
        setTimeout(() => {
            flashButton(color);
        }, (index + 1) * 600);
    });
}

function flashButton(color) {
    const button = document.getElementById(color);
    button.classList.add("flash");
    setTimeout(() => button.classList.remove("flash"), 300);
}

function handleUserClick(color) {
    userSequence.push(color);
    flashButton(color);
    checkAnswer(userSequence.length - 1);
}

function checkAnswer(currentIndex) {
    if (userSequence[currentIndex] !== gameSequence[currentIndex]) {
        document.getElementById("status").innerText = "Game Over!";
        return;
    }
    if (userSequence.length === gameSequence.length) {
        setTimeout(nextLevel, 1000);
    }
}
