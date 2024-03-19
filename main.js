const options = ["rock", "paper", "scissors"];
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultsDisplay = document.querySelector(".resultsDisplay");

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "scissors" && computerSelection === "paper")
  ) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}

function playRound(playerSelection, computerSelection) {
  const results = checkWinner(playerSelection, computerSelection);
  if (results == "Tie") {
    return " It is a tie or draw! 🤝";
  } else if (results == "Player wins") {
    return `You have won this round ${playerSelection} beats ${computerSelection} 😃🔥🔥`;
  } else {
    return `Computer has won this round ${computerSelection} beats ${playerSelection} 🥺😞😭`;
  }
}

// function getPlayerChoice() {
//   let validatedinput = false;
//   while (validatedinput == false) {
//     let choice = "rock"
//     if (choice == null) {
//       continue;
//     }
//     const choiceInLowerCase = choice.toLowerCase();
//     if (options.includes(choiceInLowerCase)) {
//       validatedinput = true;
//       return choiceInLowerCase;
//     }
//   }
// }

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  resultsDisplay.textContent = playRound(playerSelection, computerSelection);
  playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  resultsDisplay.textContent = playRound(playerSelection, computerSelection);
  playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  resultsDisplay.textContent = playRound(playerSelection, computerSelection);
  playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
});
playerDisplay.textContent = `PLAYER: ${playerSelection}`;
computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
resultsDisplay.textContent = `RESULTS: ${results}`;

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// playGame();
