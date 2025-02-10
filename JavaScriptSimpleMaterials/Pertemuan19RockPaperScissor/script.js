function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById("playAgainBtn").style.display = "inline"; // Show the "Play Again" button
}

function playAgain() {
    document.getElementById("result").innerText = "Make your choice!";
    document.getElementById("playAgainBtn").style.display = "none"; // Hide the "Play Again" button
}
