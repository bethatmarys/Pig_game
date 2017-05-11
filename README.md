# Pig Dice

#### Pig Dice Game 2017

#### by Beth Hansen and Halle Tempest

## Setup/Installation Requirements

* Clone this repository from GitHub
* Open in a web browser index.HTML

## Technologies Used

* Javascript
* Jquery

## Specifications for BDD
| Behavior: this program should| Inputs Example: when it receives | Output: it should return|
|------------------|:-------------:|------:|
|User clicks "roll the dice"|click|random number 1-6|
|If 2-6 is rolled, number is added to players turn total |5|5  is turn total|
|If player chooses to roll again, number is added to current turn|6|6 + previous roll total|
|If user clicks "hold", score is added to total and turn passes to other player|hold|score is held, turn is terminated|
|If 1 is rolled, player scores nothing and loses turn|1|pass to other player|
|If player score = 100, game terminates|100|game ends|


### License

MIT License

Copyright (c) 2017 Beth Hansen and Halle Tempest
