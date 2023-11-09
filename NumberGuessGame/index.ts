#!/usr/bin/env node 
import inquirer from "inquirer";


async function startfunction() {
    const systemNum = Math.floor(Math.random() *10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your Number b/w 1 - 10: "
        }
    ])
    
    const {userGuess} = userNum;

    console.log("Your Guess: ", userGuess, "\nsystem's Guess", systemNum);

    if(userGuess === systemNum){
        console.log(" Your Guess is Correct \nYou win!");
        
    }else{
        console.log("Better Luck Next Time");
        
    }
}
async function startAgain() {
    do {
        await startfunction();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y or N"
        })
    }
    while (again.restart ==="Y" || again.restart ==="Y" || again.restart ==="YES" || again.restart ==="yes")
}

startAgain();