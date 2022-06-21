// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Letter {
    constructor(char) {
      // If a character is not a number or a letter, make it visible right away
      // Save the underlying character
      this.visible = !/[a-z1-9]/i.test(char);
      this.char = char;
    }
  
    // TODO: If the visible property is true return the character property 
    // otherwise return an underscore
    toString() {
      
    }
  
    //TODO: return the character property
    getSolution() {
    
    }
  
    // TODO: check to see if charGuess equals the char property, 
    // if it does set the visible property to true and return true
    // otherwise return false
    guess(charGuess) {
     
    }
  }
  
  module.exports = Letter;