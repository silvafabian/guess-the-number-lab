const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    
    // invoke getGuess method inside a loop inside play function
    // add the new guess to the prevGuess array
    this.prevGuesses.push(this.getGuess())
    
  },
  
  getGuess: function(){
    //returns a number, not a string
    //is between smallest and biggest, inclusive
    // a while loop would be good for this
    // parseInt returns NaN if string cant be parsed into number
    let guess;
    do (
      guess = parseInt(prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`), guess)
    )
    while( 
      isNaN(guess) || guess >= this.smallestNum || guess <= this.biggestNum 
    )
    return guess

  }
}