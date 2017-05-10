//Business Logic

function PigDice(player, roll, turnScore, playerScore) {
  this.player = player;
  this.roll = roll;
  this.turnScore = turnScore
  this.playerScore = playerScore

}
PigDice.prototype.roll = function(){
  return 
}

//UI Logic

$(function() {
  $("#rollDice").click(function(event){
    event.preventDefault();
console.log("button clicked")
    var die1 = Math.floor ((Math.random() * 6) + 1);
    var die2 = Math.floor ((Math.random() * 6) + 1);

    var result = die1 + die2;

    $("#output").append(result);
    // console.log(result);
});
});
