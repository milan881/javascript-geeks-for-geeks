/**
 * lesson 11-i: Logical Operators
 * Logical operators are used to combine or modify boolean values in JavaScript.
 * They allow you to create complex conditions by combining multiple expressions.
 * * The main logical operators in JavaScript are:
 * 1. AND (&&): Returns true if both operands are true.
 * 2. OR (||): Returns true if at least one of the operands is true.
 * 3. NOT (!): Inverts the boolean value of an operand. 
 */

//&& (AND) operator
// The AND operator returns true if both conditions are true, otherwise it returns false.

const readline = require('readline-sync');

const divisibleBy = Number(readline.question("Enter the first number: "));

const divisibleBy3Num = divisibleBy % 3;
const divisibleBy5Num = divisibleBy % 5;
const divisibleBy7Num = divisibleBy % 7;

if(divisibleBy3Num === 0 && divisibleBy5Num === 0 ){
    console.log("fizz");
}else if (divisibleBy3Num === 0 || divisibleBy5Num === 0){
    console.log("Buzz");
}else if (divisibleBy7Num === 0){
    console.log("fizzBuzz");
}else {
    console.log("The number is not divisible by 3, 5, or 7");
}   