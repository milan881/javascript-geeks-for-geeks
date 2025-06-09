/**
 * 06 lesson: Concatenation and Template Literals
 * Concatenation is the process of joining two or more strings together. In JavaScript, you can concatenate strings using the `+` operator or by using template literals.
 * Template literals are enclosed in backticks (``) and allow for easier string interpolation and multi-line strings.
 * You can embed expressions within template literals using `${expression}` syntax, making it easier to create dynamic strings.
 *  
*/


let firstName = "John";
let lastName = "Doe";
let age = 30;
let greeting = "Hello, my name is " + firstName + " " + lastName + " and I am " + age + " years old.";

console.log(greeting); // Output: Hello, my name is John Doe and I am 30 years old.

let templateGreeting = 'Hello, my name is ${firstName} ${lastName} and I am ${age} years old.';

console.log(templateGreeting); // Output: Hello, my name is John Doe and I am 30 years old.

let multiLineString = `This is a string
that spans multiple lines.
You can use template literals to create
multi-line strings easily.`;

console.log(multiLineString);
