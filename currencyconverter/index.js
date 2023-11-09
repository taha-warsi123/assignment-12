#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let apiLink = "https://v6.exchangerate-api.com/v6/6b702c3cd1e9a39fbaba2d57/latest/PKR";
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let a = await fetchData(apiLink);
let countries = Object.keys(a);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Convert from",
    choices: countries
});
let userMoney = await inquirer.prompt({
    name: "Rupees",
    message: `Please enter the amount :`,
    type: "number"
});
let secoundCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Convert to",
    choices: countries
});
let cnvlink = `https://v6.exchangerate-api.com/v6/6b702c3cd1e9a39fbaba2d57/pair/${firstCountry.name}/${secoundCountry.name}`;
console.log(cnvlink);
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let convesionRate = await cnvData(cnvlink);
console.log(convesionRate);
let convertedRate = userMoney.Rupees * convesionRate;
console.log(`Your ${chalk.greenBright.bold(firstCountry.name)} ${chalk.greenBright.bold(userMoney.Rupees)} in ${chalk.greenBright.bold(secoundCountry.name)} is ${chalk.blueBright.bold.italic(convertedRate)}`);
