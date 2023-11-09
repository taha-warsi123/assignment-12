#!/usr/bin/env node

import inquirer from "inquirer";


const counter = (paragraph:string)=> paragraph.replace(/\s/g,"").length

async function wordCount(counter:(text:string)=>number){
    do{
    let res = await inquirer.prompt({
        type:"input",
        message:"Write yours words: ",
        name:"TypeWord"
    })
    console.log(counter(res.TypeWord))

}
while(true)
}
wordCount(counter)