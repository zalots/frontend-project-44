import readlineSync from 'readline-sync';

const start = () => {
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
};

const sentence = (str) => console.log(str);

export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export { start };
