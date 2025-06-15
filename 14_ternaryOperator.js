/**
 * lesson 14: Ternary Operator
 * The ternary operator is a shorthand way to write an if-else statement in JavaScript.
 * It allows you to evaluate a condition and return one of two values based on whether the condition is true or false.
 * The syntax is: condition ? valueIfTrue : valueIfFalse
 */


const totalMarksScoredByStudent = 75;

if(totalMarksScoredByStudent >= 40) {
    console.log("Student has passed the exam");
} else {
    console.log("Student has failed the exam");
}

console.log("Ternary operator version:");

(totalMarksScoredByStudent >= 40) 
    ? console.log("Student has passed the exam") 
    : console.log("Student has failed the exam");


// The ternary operator can also be used to assign values based on a condition

const ternary = totalMarksScoredByStudent > 100 ? "yes" : "No"

console.log("Ternary operator value:", ternary);