import readlineSync from 'readline-sync';
import { getRandomNumber, getGcd } from '../like.js';

const gcdGame = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const numOfQuestions = 3;

for (let i = 0; i < numOfQuestions; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const gcd = getGcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== gcd) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
    }

    console.log('Correct!');
}

console.log(`Congratulations, ${name}!`);

};

export default gcdGame;