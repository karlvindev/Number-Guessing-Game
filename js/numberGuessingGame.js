// Function to check the user's guess
function checkGuess(userGuess, randomNumber) {
  let messageElement = document.getElementById("message");

  if (isNaN(userGuess)) {
    messageElement.textContent = "Please enter a valid number!";
    return false;
  }

  if (userGuess < randomNumber) {
    messageElement.textContent = "Too low! Try again.";
    return false;
  } else if (userGuess > randomNumber) {
    messageElement.textContent = "Too high! Try again.";
    return false;
  } else {
    messageElement.textContent = "Congratulations! You guessed it!";
    return true;
  }
}
