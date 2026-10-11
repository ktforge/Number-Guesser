let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your guess is out of range. Pick a number from 0 to 9.');
        return false;
    }
    const humanDistance = getAbsoluteDistance(humanGuess, target);
    const computerDistance = getAbsoluteDistance(computerGuess, target);
    return humanDistance <= computerDistance;

}

const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

