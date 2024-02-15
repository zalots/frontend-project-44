import readlineSync from 'readline-sync';

const generateProgression = (start, difference, length) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + difference * i);
    }
    return progression;
};

const hideNumber = (progression, position) => {
    const hiddenProgression = [...progression];
    hiddenProgression[position] = '..';
    return hiddenProgression;
};

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log('What number is missing in the progression?');

    let correctAnswersCount = 0;
    const roundsCount = 3; 

    for (let i = 0; i < roundsCount; i++) {
        const progressionStart = Math.floor(Math.random() * 50); 
        const progressionDifference = Math.floor(Math.random() * 10) + 1; 
        const progressionLength = Math.floor(Math.random() * 6) + 5; 

        const hiddenPosition = Math.floor(Math.random() * progressionLength); 
        const progression = generateProgression(progressionStart, progressionDifference, progressionLength);
        const hiddenProgression = hideNumber(progression, hiddenPosition);

        console.log(`Question: ${hiddenProgression.join(' ')}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = progression[hiddenPosition].toString();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${playerName}!`);
            break;
        }
    }

    console.log(`Congratulations, ${playerName}!`);
}

export default playGame;