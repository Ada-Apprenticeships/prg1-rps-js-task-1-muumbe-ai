// can i make this concept into arrays and like cross match them i think theres a math to this
player1 = ["rock", "paper", "scissor","lizard","spock"]
player2 = ["rock", "paper", "scissor","lizard","spock"]

// make rules a constant variable

function rockPaperScissors(player1, player2) {
// I want to define the rules:
const rules = {
  rock : ["scissors", "lizard"],
  paper : ["rock", "spock"],
  scissor : ["paper", "lizard"],
  lizard : ["spock", "paper"],
  spock : ["scissors", "rock"]
};
  if (player1 === player2) {
    return "draw";
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "lizard" && player2 === "spock") ||
    (player1 === "spock" && player2 === "scissors") ||
    (player1 === "rock" && player2 === "lizard") ||
    (player1 === "paper" && player2 === "spock") ||
    (player1 === "scissors" && player2 === "lizard") ||
    (player1 === "lizard" && player2 === "paper") ||
    (player1 === "spock" && player2 === "rock")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

console.log(rockPaperScissors("spock", "scissors"));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
