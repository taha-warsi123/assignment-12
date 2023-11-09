import inquirer from "inquirer";


const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter your Id: "

    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter your Pin: "

    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:",
        
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fastcash", "Withdrawl"],
        message: "Select your Transaction",
        when(answers){
            return answers.accountType
        }

    },
    {
        type: "list",
        name: "amount",
        choices: [1000 , 2000 , 5000 , 10000 , 20000],
        message: "Select your amount",
        when(answers){
            return answers.transactionType == "Fast cash"
        }

    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount",
        when(answers){
            return answers.transactionType == "Withdrawl"
        }

    }, 
    
])

if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random()* 1000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your Remaining balances is ", remaining);
        
    }
    else{
        console.log("Insufficient Balance");
        
    } 
     
} 



