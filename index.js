if (userAnswer.toLowerCase() === 'yes' && isEven(randomNumber)) {
    console.log('Correct!');
    correctAnswers += 1;
  } else if (userAnswer.toLowerCase() === 'no' && !isEven(randomNumber)) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }


console.log(`Congratulations, ${name}!`);

