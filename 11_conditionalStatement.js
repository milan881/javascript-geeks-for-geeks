/**
 * lesson 11: Conditional Statements
 * Conditional statements allow you to execute different blocks of code based on certain conditions.
 * JavaScript provides several types of conditional statements, including:
 * 1. if statement: Executes a block of code if a specified condition is true.
 * 2. if...else statement: Executes one block of code if a condition is true, and another block if it is false.
 * 3. else if statement: Allows you to check multiple conditions in sequence.
 * 4. switch statement: Evaluates an expression and executes code based on matching cases.
 * 5. Ternary operator: A shorthand for if...else statements, allowing you to write conditional expressions in a single line.
 */

//if statement

/*
if(condition/expression) {
    // code to be executed if the condition is true
    console.log("Condition is true");
}
*/

// Example of an if statement
// If condition is true, execute the code block
// If condition is false, the code block will not execute
if(true) {
    console.log("Condition is true");
}

if(false) {
    console.log("Condition is false");
}

const loggedIn = true;

if(loggedIn) {
    console.log("User is logged in");
}


const age = 16;

if(age >= 18) {
    console.log("User is an adult");
}

// if...else statement

/*
if(condition/expression) {
    // code to be executed if the condition is true
}else {
    // code to be executed if the condition is false
    console.log("Condition is false");
}
*/

// Example of an if...else statement

if(age >= 18) {
    console.log("User is an adult");
}else {
    console.log("User is not an adult");
}

// npm install readline-sync
const readlineSync = require('readline-sync');

const userInput = readlineSync.question("Enter a number: ");

if(userInput > 18) {
    console.log("You are an adult");
}
else {
    console.log("You are not an adult");
}


const readline = require("readline-sync");

const number = Number(readlineSync.question("Enter the no-> "));

const remender = number % 3;

if(remender === 0){
    console.log("fizzz",true);
}else{
    console.log("buzz",false);
}


