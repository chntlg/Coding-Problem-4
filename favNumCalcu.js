function guessNum() {
    let favNumber = 23
    let userGuess;
    while (true) {
      userGuess = parseInt(prompt("Guess a number:"));
      
      if (userGuess < favNumber) {
           alert("Too low!");
          } else if (userGuess > favNumber) {
              alert("Too high!");
          } else if (userGuess === favNumber) {
              alert("Correct!");
          } else {
              alert("Please enter a number.");
          }
      }
  }
  guessNum();