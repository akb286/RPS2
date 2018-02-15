$(document).ready(function() {
  choice1 = null;
  choice2 = null;

  function computerChoice() {
    array = ["rock", "paper", "scissors"]
    choice2 = array[Math.floor(Math.random() * 3)]
    // var computerChoice = Math.random();
    // if (computerChoice <= 0.33) {
    //   choice2 = "rock";
    // } else if (0.34 <= computerChoice <= 0.66) {
    //   choice2 = "paper";
    // } else {
    //   choice2 = "scissors";
    // }
  }

  function compare(choice1, choice2) {
    if (choice1 == choice2) {
      return ("It's TIE!");
    } else if (choice1 == "rock") {
      return rockLogic(choice2);
    } else if (choice1 == "paper") {
      return paperLogic(choice2);
    } else if (choice1 == "scissors") {
      return scissorsLogic(choice2);
    }
  }

  function rockLogic(choice2) {
    if (choice2 == "scissors") {
      return ("Rock WINS!");
    } else {
      return ("Papers WINS!");
    }
  }

  function paperLogic(choice2) {
    if (choice2 == "rock") {
      return ("Paper WINS!");
    } else {
      return ("Rock WINS!");
    }
  }

  function scissorsLogic(choice2) {
    if (choice2 == "paper") {
      return ("Scissors WINS!");
    } else {
      return ("Rock WINS!");
    }
  }
  $(".btn").on('click', function() {
    computerChoice()
    choice1 = this.id
    $(".result1").text(compare(choice1, choice2))
    console.log(compare(choice1, choice2))
    console.log(this.id, choice1, choice2)
  });




})