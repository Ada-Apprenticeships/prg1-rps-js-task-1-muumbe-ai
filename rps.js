
function rockPaperScissors(player1, player2) {
// The rules shows (player one choice : what beats the player one choice)
const rules = {
  rock : ["scissors", "lizard"],
  paper : ["rock", "spock"],
  scissors : ["paper", "lizard"],
  lizard : ["spock", "paper"],
  spock : ["scissors", "rock"]
};
//Ternary operator checks the input of player 1 and player 2 and outputs the result
return player1 === player2 ? "draw" : (rules[player1] && rules[player1].includes(player2)) ? "player1" : "player2";

}
// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
