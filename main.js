// default import export hay name change kr skty hay 
//moudule main a hay yhan sana ku k ak hi file iposrt hoti 
import sana from './first.js';
console.log(sana);
// name import export main mutlipul file kar skty hy is liay 
//yahan nam chnage nhi hoga nam change krny k liy 
// b as sana,c as feroza
import { b, c, d } from './first.js';
console.log(b + c);
console.log(d + c);
let answer = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (60 - answer.age)
    + " years you will be 60 years old.");
import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk.red("Insha Allah, in " + (60 - answers.age)
    + " years you will be 60 years old."));
import * as everthing from './first.js';
console.log(everthing.f1("hello"));
