#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to Code With Fizza - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([

    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess Number(Number Limit from 1 to 5):",
    },

]);

// Conditional Statement.

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation! You guess a correct number");  
}
else{
    console.log("Sorry! You guess a wrong number"); 
};
