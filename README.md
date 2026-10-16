# Number Guesser

A browser game from Codecademy's Full-Stack Engineer path where you play against the computer. Each round a secret number from 0 to 9 is picked, you and the computer both guess, and whoever is closer wins the round. Ties go to you.

Codecademy provided the page, the styles, and the game wiring in `game.js`. My part was `script.js`, the logic that actually runs the game:

`generateTarget()` picks the secret number
`compareGuesses()` figures out who was closer using `Math.abs()`
`updateScore()` adds a point to the winner
`advanceRound()` moves to the next round

I also added a check so if you guess something outside 0 to 9, you get an alert telling you to pick a number in range.

## Running it

Clone the repo and open `index.html` in your browser.

Built by DeVante Bush
