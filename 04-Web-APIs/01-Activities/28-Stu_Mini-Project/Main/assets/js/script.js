var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 30;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  //TODO: Update the page to let the user know they won
  
  //TODO: Increment winCounter
  
  //TODO: Call setWins function
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  //TODO: Update the page to let the user know they lost
  
  //TODO: Increment lossCounter
  
  //TODO: Call setLoss function
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    //TODO: Create a set interval that will countdown the timerCount and display that value on the page

    //TODO: Use the checkWin function to see if the user has won

    //TODO: If time has run out clear the interval and call loseGame function
   
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
}

//TODO: Update win count on screen and sets win count to client storage
function setWins() {

}

//TODO: Update lose count on screen and sets lose count to client storage
function setLosses() {
 
}

// These functions are used by init
function getWins() {
  // TODO: Get stored wins value from client storage, if it exists
  
  // TODO: If stored value doesn't exist, set counter to 0
 
  //TODO: If a stored value is retrieved from client storage set the winCounter to that value
   
  
  //TODO: Render win count to page
  
}

function getlosses() {
   // TODO: Get stored losses value from client storage, if it exists
  
  // TODO: If stored value doesn't exist, set counter to 0
 
  //TODO: If a stored value is retrieved from client storage set the lossCounter to that value
   
  
  //TODO: Render loss count to page
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

//TODO: Attach event listener to start button to call startGame function on click


// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // TODO: Reset win and loss counts to zero

  // TODO: Call setWins and setLosses functions
 
}


// TODO: create an add event listener so when the Reset button is clicked it calls reset game function