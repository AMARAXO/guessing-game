let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 3;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;

  // Validate input
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    return;
  }
  if (isNaN(guess) || guess.includes(".")) {
    alert("Please enter a valid whole number between 1 and 100!");
    return;
  }
  
  guess = parseInt(guess);

  if (chances > 0) {
    if (guess === randomNumber) {
      document.getElementById("message").innerHTML = `Congratulations! You guessed the number in ${3 - chances} chances!`;
      disableInput();
    } else if (guess < randomNumber) {
      document.getElementById("message").innerHTML = `Too low! Try again. You have ${chances - 1} chances left.`;
      chances--;
    } else {
      document.getElementById("message").innerHTML = `Too high! Try again. You have ${chances - 1} chances left.`;
      chances--;
    }
  } else {
    document.getElementById("message").innerHTML = `Game Over! The number was ${randomNumber}.`;
    disableInput();
  }
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("guessInput").value = "";
}