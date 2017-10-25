var hands = ["rock", "paper", "scissors"];

function getHand() {
  return hands = weapons[parseInt(Math.random() * weapons.length) % 3];
}

playerOne = {
  name: "Emily"
  hand: getHand
}


playerTwo = {
  name: "Todd"
  hand: getHand
}


function playRound(playerOne, playerTwo) {
  var playerOneHand = playerOne.hand();
  var playerTwoHand = playerTwo.hand();
  var winner


  if (playerOneHand === "rock" && playerTwoHand === "paper" || playerOneHand === "paper" && playerTwoHand === "scissors" || playerOneHand === "scissors" && playerTwoHand === "rock"){
    winner = playerTwo.name;
    playerTwo.wins++;
  } else if (playerOneHand !== playerTwoHand) {
    winner = playerOne.name;
    playerOne.wins++;
  } else if (playerOneHand === playerTwoHand) {
    console.log("It's a tie!");
  }
  console.log ("Emily: " + playerOneHand + ", Todd: " + playerTwoHand + " ---> WINNER: " + winner);
  console.log ("SCORE -- Emily: " + playerOne.wins + ", Todd: " + playerTwo.wins);
  return winner;
  }

playRound(playerOne, playerTwo);
