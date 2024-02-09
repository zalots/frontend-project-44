import readlineSync from 'readline-sync';

const isEven = (getRandomNumber) => {
  return getRandomNumber % 2 === 0; 
};

export const b = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const  getRandomNumber = () => {
    return Math.floor(Math.random() * 101);
  }
  
  let num = getRandomNumber();

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${num}`)

  const answer = readlineSync.question('Your answer: ')

  let correctAnswers = (isEven(num)) ? 'yes' : 'no';


  if (answer === correctAnswers) {
    console.log('Correct!')
  } else {
    console.log(`'${answer}' is wrong answer . Correct answer was '${correctAnswers}'.`);
    console.log(`Let's try again,!`);
    process.exit(0)
  }
  return (b);
};


  export default {b};