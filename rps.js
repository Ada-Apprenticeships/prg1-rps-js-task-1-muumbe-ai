
function rockPaperScissors(player1, player2) {
 if (player1 === player2){
  return "draw" 
 }
 else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper") 
 ) {
  return 'player1'
 } else {
  return 'player2'
 }
   
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}