#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('welcome to ther brain-games');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => {
    return number % 2===0; 
};


    let coorectAnswer = 0;
    while (coorectAnswer < 3);
    const randomNumber = Math.floor(Math.random()*100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

if ((isEven(randomNumber) && userAnswer === 'yes')
|| (!isEven(randomNumber) && userAnswer === 'no')) {
console.log('Correct!');
correctAnswer +=1;
} else {
console.log(`"${userAnswer}" is wrong answer ;(. The correct answer was ${
  Even(randomNumber) ? 'yes' : 'no'
}.`);
console.log(`Let's try again, ${name}!`);
}

if (startGame()) {
console.log(`Congratulations, ${name}! You won!`);
}
