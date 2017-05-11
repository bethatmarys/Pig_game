//Business Logic

function Player(player, turnScore, playerScore) {
  this.player = player;
  this.turnScore = 0;
  this.playerScore = 0;
}

Player.prototype.roll = function(){
  // get a random number
  var randNum = Math.floor ((Math.random() * 6) + 1);

  this.turnScore = this.turnScore + randNum;
  // add that random number to current turn score

  return randNum;
}

// somePlayer.roll()
  // return a random number (what they rolled)
  // add that roll score to turn score


//UI Logic

$(function() {

  var player1 = new Player(args...)

  $("#rollDice").click(function(event){

    event.preventDefault();


    $("#output").text(player1.roll);
    // console.log(result);
});
});
