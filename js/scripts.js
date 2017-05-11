//Business Logic

function Player(player, turnScore, totalScore) {
  this.player = player;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function(){
  // get a random number
  var randNum = Math.floor ((Math.random() * 6) + 1);
  this.turnScore = 0;

  if (randNum === 1){
    return ("1")
    // alert("You rolled a 1. Pass the dice!")
    // this.turnScore= 0;
  } else if(randNum !== 1){
    this.turnScore += randNum;
    this.turnScore = this.turnScore + randNum
    // this.totalScore = this.turnScore
  return randNum;

  }
  // add that random number to current turn score
}

Player.prototype.hold = function(){
  // adding the turnscore to the totalScore

  this.totalScore = this.totalScore + this.turnScore;

  return totalScore;
}

// somePlayer.roll()
  // return a random number (what they rolled)
  // add that roll score to turn score


//UI Logic

$(function() {



  var player1 = new Player("Player 1", 0, 0)
  var player2 = new Player("Player 2", 0, 0)



  $("#rollDice").click(function(){

    var rollResult = player1.roll();

    $("#output").text(rollResult);

    $(".turnScore").text(player1.turnScore);
    console.log (player1.roll)

    $(".totalScore1").text(player1.totalScore);
    $(".totalScore2").text(player2.totalScore);

});
});
