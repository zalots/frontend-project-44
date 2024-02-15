import readlineSync from 'readline-sync';

const brainCalc = () => {
    console.log("brain-calc");
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name?");
    console.log("Hello, " + name + "!");
    console.log("What is the result of the expression?");
    let correctAnswers = 0;

    while (correctAnswers < 3) {
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        let operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
        let question = "Question: " + num1 + " " + operator + " " + num2;
        let userAnswer = readlineSync.question(question + "\nYour answer:");

        let correctAnswer;
        if (operator === "+") {
            correctAnswer = num1 + num2;
        } else if (operator === "-") {
            correctAnswer = num1 - num2;
        } else {
            correctAnswer = num1 * num2;
        }

        if (correctAnswer.toString() === userAnswer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("'" + userAnswer + "' is wrong answer ;(. Correct answer was '" + correctAnswer + "'.");
            console.log("Let's try again, " + name + "!");
            break;
        }
    }

    console.log("Congratulations, " + name + "!");
};

export default brainCalc;