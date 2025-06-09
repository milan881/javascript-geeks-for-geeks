/**
 * 07 lesson: Arithmetic Operators
 * Arithmetic operators are used to perform mathematical operations on numbers. In JavaScript, the most common arithmetic operators include:
 * - Addition (`+`): Adds two numbers together.
 * - Subtraction (`-`): Subtracts the second number from the first.
 * - Multiplication (`*`): Multiplies two numbers.
 * - Division (`/`): Divides the first number by the second.
 * - Modulus (`%`): Returns the remainder of the division of the first number by the second.
 * * - Exponentiation (`**`): Raises the first number to the power of the second.
 * * These operators can be used with both integers and floating-point numbers, and they follow the standard order of operations (PEMDAS/BODMAS).
 * 
 */

//both are numbers
console.log("Arithmetic Operations with Numbers");

let a = 10;
let b = 5;
let addition = a + b; // Addition
let subtraction = a - b; // Subtraction
let multiplication = a * b; // Multiplication
let division = a / b; // Division
let modulus = a % b; // Modulus
let exponentiation = a ** b; // Exponentiation

console.log("Addition:", addition); // Output: 15
console.log("Subtraction:", subtraction); // Output: 5
console.log("Multiplication:", multiplication); // Output: 50
console.log("Division:", division); // Output: 2
console.log("Modulus:", modulus); // Output: 0
console.log("Exponentiation:", exponentiation); // Output: 100000

// Arithmetic operations with mixed types (number and string)
console.log("Mixed Operations with Number and String");

let num = 10;
let str = "5";
let mixedAddition = num + str; // Implicit conversion to string
let mixedSubtraction = num - str; // Implicit conversion to number
let mixedMultiplication = num * str; // Implicit conversion to number
let mixedDivision = num / str; // Implicit conversion to number
console.log("Mixed Addition:", mixedAddition); // Output: "105" (string concatenation)
console.log("Mixed Subtraction:", mixedSubtraction); // Output: 5 (number)
console.log("Mixed Multiplication:", mixedMultiplication); // Output: 50 (number)
console.log("Mixed Division:", mixedDivision); // Output: 2 (number)

// Arithmetic operations with strings that cannot be converted to numbers
console.log("Invalid Operations with Non-Numeric Strings");

let invalidStr = "abc";
let invalidStr1 = "10abc";
let invalidAddition = num + invalidStr; // Implicit conversion to string
let invalidSubtraction = num - invalidStr; // NaN (Not a Number)
let invalidMultiplication = num * invalidStr; // NaN (Not a Number)
let invalidDivision = num / invalidStr; // NaN (Not a Number)
console.log("Invalid Addition:", invalidAddition); // Output: "10abc" (string concatenation)
console.log("Invalid Subtraction:", invalidSubtraction); // Output: NaN
console.log("Invalid Multiplication:", invalidMultiplication); // Output: NaN
console.log("Invalid Division:", invalidDivision); // Output: NaN
