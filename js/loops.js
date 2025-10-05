// Generate a random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 50) + 1;

// Array to store previous guesses
let guesses = [];

// Function to handle the game logic
function handleGuess() {
  let userGuess = parseInt(document.getElementById("guessInput").value);

  // Call the checkGuess function from ifElse.js
  let isCorrect = checkGuess(userGuess, randomNumber);

  // Add the guess to the array if it's valid
  if (!isNaN(userGuess)) {
    guesses.push(userGuess);
  }

  // Display previous guesses using a for loop
  let previousGuessesText = "Previous guesses: ";
  for (let i = 0; i < guesses.length; i++) {
    previousGuessesText += guesses[i] + (i < guesses.length - 1 ? ", " : "");
  }
  document.getElementById("previousGuesses").textContent = previousGuessesText;

  // Reset the game if the guess is correct
  if (isCorrect) {
    alert("You guessed it! Starting a new game.");
    randomNumber = Math.floor(Math.random() * 50) + 1;
    guesses = [];
    document.getElementById("message").textContent = "";
    document.getElementById("previousGuesses").textContent = "";
    document.getElementById("guessInput").value = "";
  }
}

// Example of using a while loop to display guesses in reverse order
function displayGuessesInReverse() {
  let reverseText = "Guesses in reverse: ";
  let i = guesses.length - 1;
  while (i >= 0) {
    reverseText += guesses[i] + (i > 0 ? ", " : "");
    i--;
  }
  console.log(reverseText);
}

// Example of using for...of loop to log guesses
function logGuesses() {
  console.log("Logging guesses:");
  for (let guess of guesses) {
    console.log(guess);
  }
}

// Example of using forEach to perform an action on each guess
function processGuesses() {
  console.log("Processing guesses:");
  guesses.forEach((guess, index) => {
    console.log(`Guess ${index + 1}: ${guess}`);
  });
}

// Attach event listener to the button
document.getElementById("submitGuess").addEventListener("click", handleGuess);
