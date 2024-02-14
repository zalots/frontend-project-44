import readlineSync from 'readline-sync';

const brainCalc = () => {
    console.log("brain-calc");
    console.log("Welcome to the Brain Games!");
    var name = prompt("May I have your name?");
    console.log("Hello, " + name + "!");
    console.log("What is the result of the expression?");
    var correctAnswers = 0;

    while (correctAnswers < 3) {
        var num1 = Math.floor(Math.random() * 100) + 1;
        var num2 = Math.floor(Math.random() * 100) + 1;
        var operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
        var question = "Question: " + num1 + " " + operator + " " + num2;
        var userAnswer = prompt(question + "\nYour answer:");

        var correctAnswer;
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
            return;
        }
    }

    console.log("Congratulations, " + name + "!");
}

brainCalc();

export default {brainCalc};