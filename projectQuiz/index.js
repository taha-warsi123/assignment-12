import inquirer from "inquirer";
import chalk from "chalk";
/* let a = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "what is your name"
});
 console.log(chalk.blue(a.fname));
  */
const apiLink = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    // for user name
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is your Name?"
    });
    for (let i = 1; i <= 8; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.quiz === data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.green("Correct"));
        }
        else {
            console.log(`correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Dear ${chalk.redBright.bold(name.fname)}, your score is ${chalk.green.bold(score)} out of ${chalk.blue.bold('10')}`);
};
startQuiz();
