import readlineSync from 'readline-sync';

const isEven = (getRandomNumber) => {
  return getRandomNumber % 2 === 0;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
}


export const b = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i <= 3; i++) {

    const numb = getRandomNumber();

    console.log(`Question: ${numb}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswers = isEven(numb) ? 'yes' : 'no';

    if (answer === correctAnswers) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswers}'.`);
      console.log(`Let's try again!`);
      break;
    }
  };


  return b;
};


  export default {b};