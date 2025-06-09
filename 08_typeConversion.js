/**
 * lesson 08: Type Conversion
 * Type conversion is the process of converting a value from one data type to another. In JavaScript, this can happen implicitly or explicitly.
 * Implicit conversion occurs automatically when JavaScript converts a value to a different type as needed, such as when performing arithmetic operations with mixed types.
 * Explicit conversion, on the other hand, is done manually using functions like `Number()`, `String()`, and `Boolean()`.
 * * Common type conversions include:
 * * - Converting a string to a number using `Number()`, `parseInt()`, or `parseFloat()`.
 * * - Converting a number to a string using `String()` or the `toString()` method.
 * * - Converting a value to a boolean using `Boolean()`, where non-zero numbers and non-empty strings are `true`, and zero or empty strings are `false`.
 * * - Converting a boolean to a string using `String()` or concatenation with an empty string.
 */

/**
 * type conversion 
 * to String
 * - Using `String()`: Converts a value to a string.
 * * - Using `toString()`: Converts a value to a string, but only works on objects and not on `null` or `undefined`.
 * to Number
 * - Using `Number()`: Converts a value to a number, handling strings and booleans.
 * * - Using `parseInt()`: Converts a string to an integer, ignoring non-numeric characters after the number.
 * to Boolean
 * *- Using `Boolean()`: Converts a value to a boolean, where non-zero numbers and non-empty strings are `true`, and zero or empty strings are `false`.
 * * - Using double negation (`!!`): Converts a value to a boolean, where `!!value` is `true` for truthy values and `false` for falsy values.
 */

// string to number conversion

let a = "3"
let b = "10"

console.log(Number(a)+Number(b))

// number to string conversion
let num = 42;
let numToString = String(num);
console.log(numToString); // Output: "42"
console.log(typeof numToString); // Output: "string"


// converting to boolean
let truthyValue = "Hello";
let falsyValue = 0;
let emptyString = "";

let truthyBoolean = Boolean(truthyValue);
let falsyBoolean = Boolean(falsyValue);


console.log(truthyBoolean); // Output: true
console.log(falsyBoolean); // Output: false
console.log(Boolean(emptyString)); // Output: false