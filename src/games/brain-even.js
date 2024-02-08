function b () {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  };
  
  const isEven = (number) => {
      return number % 2 === 0; 
  };
  
  
      let coorectAnswer = 0;
      while (coorectAnswer < 3);
      const randomNumber = Math.floor(Math.random()*100);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== 'yes' && userAnswer !== 'no');
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
  
  export default {b};