const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
  constructor(word) {
    // word.split - splits word into array of letters
    // .map - instantiate a new `Letter` for each character and return an array
    // referred to with the instance variable, `letters`
    this.letters = word.split("").map(char => new Letter(char));
  }

  // TODO: Use the Letter getSolution() to return each letter in the word
  // HINT: You might have to use map() and join()
  getSolution() {
    
  }

  // TODO: convert the letters property into a string
  // HINT: you might have to use join()
  toString() {
    
  }

  // TODO: Loop through the letters property array and use the Letters .guess() method
  // to check if that letter is in the word.  If it is return the letter
  guessLetter(char) {
    
  }

  // TODO: Return true if all letters in the word have been guessed correctly
  guessedCorrectly() {
    
  }
}

module.exports = Word;