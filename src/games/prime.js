import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What number is missing in the progression?');

const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const playGame = () => {
    let correctAnswersCount = 0;
    const roundsCount = 3; 

    for (let i = 0; i < roundsCount; i++) {
        const number = Math.floor(Math.random() * 100); 

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${playerName}!`);
            break;
        }
    }

    console.log(`Congratulations, ${playerName}! You answered correctly to all questions.`);
};

export default playGame;