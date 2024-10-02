#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);


let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1-10: ",
    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log(`congratulations! ${answer.userGuessedNumber} is a right guess`);
}else{
    console.log(`oppps! ${answer.userGuessedNumber} is a wrong guess. ${randomNumber} is a correct number`);
}
