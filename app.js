const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    // this.playerNums();
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    
    
    while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum){
      this.prevGuesses.push(this.getGuess());
      this.render(); 
    }
     
  },
  
  getGuess: function(){
    
    let guess;
    do (
     guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`), guess)
    
    )
    while( 
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum 
    )
    return guess

  },

  render: function(){
    
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    }
    else {
      alert(`Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? 'high' :'low'}. Previous guesses ${this.prevGuesses}`)
    }

  },

}

game.play()  
//  console.log(game)

// invoke getGuess method inside a loop inside play function
// add the new guess to the prevGuess array
// render is invoked here in the loop to keep propmts going

// trying to figure out how to return a message when guess is NaN
// if(isNaN(parseInt(this.guess, ))){
//   guess = prompt(`Unfortunately, ${this.guess} is not a number. Please enter a numerical value.`)
// }
// else{
//  this.prevGuesses.push(this.getGuess());
// }

//returns a number, not a string
//is between smallest and biggest, inclusive
// a while loop would be good for this
// parseInt returns NaN if string cant be parsed into number

// render method declared
// play will call this after a guess has been made
// use an if-else to display correct message depending on the guess

// userInput: function(){
//   this.smallestNum = parseInt(prompt('Enter number for your smallest value'));

//   this.biggestNum = parseInt(prompt('Enter number for your biggest value'));
// }
// new function to reset the ranges and to prompt the user
// try setting the ranges to user input inside of the play function
// if player enters a guess bigger than secret number, make it the new biggest number
// same thing with the lowest