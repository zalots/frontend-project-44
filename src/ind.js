import readlineSync from 'readline-sync';

const indra  = () => {
    const firstSent = 'Answer "yes" if the number is even, otherwise answer "no".';

    const gameRound = () => {
        const answers = [];
        const num = randomNumber(1,100);
        console.log(`Question ${num}`);
        const answer = readlineSync.question('Your answer: ');
        answer.push(answer);
        const rightAnswer = parseInt(num, 10) % 2 === 0 ? 'yes' : 'no';
        answer.push(rightAnswer);
        return answer;
    }
};

export default indra;