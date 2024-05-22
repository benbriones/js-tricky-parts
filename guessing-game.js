function guessingGame() {
  const number = Math.floor(Math.random() * 100)
  let guesses = 0;
  let hasWon = false;

  return function(guess) {
    if (hasWon) return "The game is over, you already won!"
    guesses++;

    if (guess === number) {
      hasWon = true;
      return `You win! You found ${number} in ${guesses} guesses.`
    } else  if ( guess < number) {
      return `${guess} is too low!`
    } else {
      return `${guess} is too high!`
    }
  }
}

module.exports = { guessingGame };
