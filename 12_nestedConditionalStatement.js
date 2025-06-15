/**
 * lesson 12: Nested Conditional Statements
 * Nested conditional statements allow you to place one conditional statement inside another.
 * This enables you to check multiple conditions in a structured way.
 * * JavaScript supports nesting of if statements, if...else statements, and switch statements.
 * * Nesting can help you create more complex decision-making logic in your code.
 * * However, excessive nesting can make code harder to read and maintain.
*/

const readlineSync = require('readline-sync');


const number = Number(readlineSync.question("Enter a number :"));

const isEven = number %2;

if(isEven === 0) {
    console.log("No is even")
    if(number >10){
        console.log(`${number} is grater than 10`)
    }else{
        console.log(`${number} is less than or equal to 10`)
    }
}else{
    console.log("No is odd");
}