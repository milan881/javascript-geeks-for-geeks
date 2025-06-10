/**
 * lesson 10: Comparison Operators
 * Comparison operators are used to compare two values and return a Boolean result (true or false).
 * JavaScript provides several comparison operators, including:
 * 1. Equal (==): Compares two values for equality, performing type coercion if necessary.
 * 2. Strict Equal (===): Compares two values for equality without type coercion, meaning both value and type must match.
 * 3. Not Equal (!=): Compares two values for inequality, performing type coercion if necessary.
 * 4. Strict Not Equal (!==): Compares two values for inequality without type coercion, meaning both value and type must not match.
 * 5. Greater Than (>): Checks if the left value is greater than the right value.
 * 6. Less Than (<): Checks if the left value is less than the right value.
 * 7. Greater Than or Equal (>=): Checks if the left value is greater than or equal to the right value.
 * 8. Less Than or Equal (<=): Checks if the left value is less than or equal to the right value.
 */

console.log("Comparison Operators");

//>
console.log(50>30); // Output: true

//<
console.log(50<30); // Output: false

//>=
console.log(50>=50); // Output: true

//<=
console.log(50<=50); // Output: true

//==
console.log(50==50); // Output: true
console.log(50=="50"); // Output: true (type coercion)
console.log(50=="50.0"); // Output: true (type coercion)

//===
console.log(50===50); // Output: true
console.log(50==="50"); // Output: false (no type coercion)
console.log(50==="50.0"); // Output: false (no type coercion)

//!=
console.log(50!=50); // Output: false
console.log(50!=30); // Output: true
console.log(50!="50"); // Output: false (type coercion)

//!==
console.log(50!==50); // Output: false
console.log(50!==30); // Output: true
console.log(50!=="50"); // Output: true (no type coercion)
console.log(50!=="50.0"); // Output: true (no type coercion)

//> and < can also be used with strings
console.log("apple" > "banana"); // Output: false (based on lexicographical order)
console.log("apple" < "banana"); // Output: true (based on lexicographical order)
// Strings with numbers
console.log("50" > "30"); // Output: true (based on lexicographical order)
console.log("50" < "30"); // Output: false (based on lexicographical order)
// Comparing different types
console.log(50 > "30"); // Output: true (type coercion)
console.log(50 < "30"); // Output: false (type coercion)
// Comparing null and undefined
console.log(null == undefined); // Output: true (type coercion)
console.log(null === undefined); // Output: false (no type coercion)
// Comparing NaN
console.log(NaN == NaN); // Output: false (NaN is not equal to anything, including itself)
console.log(NaN === NaN); // Output: false (NaN is not equal to anything, including itself)




