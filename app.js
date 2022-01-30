const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  prevGuesses: [],
  getGuess: `Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`
}