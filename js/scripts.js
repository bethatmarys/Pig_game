//Business Logic

function Player(player, turnScore, playerScore) {
  this.player = player;
  this.turnScore = turnScore;
  this.playerScore = playerScore;
}

Player.prototype.roll = function(){
  // get a random number
  var randNum = Math.floor ((Math.random() * 6) + 1);
  this.turnScore = 0;

  if (randNum === 1){
    alert("You rolled a 1. Pass the dice!")
  } else if(randNum !== 1){
    this.turnscore = this.turnScore + randNum;

  }
  // add that random number to current turn score

  return randNum
}

// somePlayer.roll()
  // return a random number (what they rolled)
  // add that roll score to turn score


//UI Logic

$(function() {

  var player1 = new Player("Player 1")
  var player2 = new Player("Player 2")
  // var turnScore = 0


  $("#rollDice").click(function(event){

    event.preventDefault();

    $(".turnScore").text(player1.turnScore);
    $("#output").text(player1.roll);

    $("#results").show();
     $(".totalScore").text();
    // console.log(result);
});
});
