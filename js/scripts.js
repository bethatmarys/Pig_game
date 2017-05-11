//Business Logic

function Player(player, turnScore, totalScore) {
  this.player = player;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function(){
  // get a random number
  var randNum = Math.floor ((Math.random() * 6) + 1);
  //this.turnScore = 0;

  if (randNum === 1){
    alert("You rolled a 1. Pass the dice!")
  } else if(randNum !== 1){
    this.turnScore += randNum;
console.log("hi");
  return randNum;

  }
  // add that random number to current turn score


}

// somePlayer.roll()
  // return a random number (what they rolled)
  // add that roll score to turn score


//UI Logic

$(function() {
// event.preventDefault();


  var player1 = new Player("Player 1", 0, 0)
  var player2 = new Player("Player 2", 0, 0)
  // var turnScore = 0


  $("#rollDice").click(function(){

    var randNum = player1.roll();
    $("#output").text(randNum);
    $(".turnScore").text(player1.turnScore);
    console.log (player1.roll)

    $("#results").show();
     $(".totalScore").text();
    // console.log(result);
});
});
