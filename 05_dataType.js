/**
 * 05 lesson: Data Types
 * JavaScript has several built-in data types that can be categorized into two main groups: primitive types and reference types.
 * Primitive types include
    * 1. Number: Represents numeric values, both integers and floating-point numbers.
    * 2. String: Represents a sequence of characters enclosed in single or double quotes.
    * 3. Boolean: Represents a logical value, either true or false.
    * 4. Undefined: Represents a variable that has been declared but not assigned a value.
    * 5. Null: Represents an intentional absence of any value or object.
    * 6. Symbol: Represents a unique and immutable value, often used as object property keys.
    * 7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.
    * Reference types include
    * 1. Object: Represents a collection of key-value pairs, where keys are strings and values can be of any data type. 
    * 2. Array: A special type of object that represents an ordered collection of values, which can be of any data type.
    * 3. Function: A callable object that can be invoked to perform a specific task or computation.
*/

let number = 42; // Number data type
let string = "Hello, World!"; // String data type
let boolean = true; // Boolean data type
let undefinedVariable; // Undefined data type
let nullVariable = null; // Null data type  
let symbolVariable = Symbol("unique"); // Symbol data type
let bigIntVariable = BigInt(123456789012345678901234567890); // BigInt data type 
let objectVariable = { key: "value" }; // Object data type


let arrayVariable = [1, 2, 3, 4, 5]; // Array data type
let functionVariable = function() { return "Hello from a function!"; }; // Function data type

console.log("Number:", number); // Output: Number: 42
console.log(typeof number); // Output: number
console.log("*********************");
console.log("String:", string); // Output: String: Hello, World!
console.log(typeof string); // Output: string
console.log("*********************");

console.log("Boolean:", boolean); // Output: Boolean: true
console.log(typeof boolean); // Output: boolean
console.log("*********************");

console.log("Undefined Variable:", undefinedVariable); // Output: Undefined Variable: undefined
console.log(typeof undefinedVariable); // Output: undefined
console.log("*********************");

console.log("Null Variable:", nullVariable); // Output: Null Variable: null
console.log(typeof nullVariable); // Output: object (this is a known quirk in JavaScript)
console.log("*********************");

console.log("Symbol Variable:", symbolVariable); // Output: Symbol Variable: Symbol(unique)
console.log(typeof symbolVariable); // Output: symbol   
console.log("*********************");

console.log("BigInt Variable:", bigIntVariable); // Output: BigInt Variable: 123456789012345678901234567890n
console.log(typeof bigIntVariable); // Output: bigint
console.log("*********************");

console.log("Object Variable:", objectVariable); // Output: Object Variable: { key: 'value' }
console.log(typeof objectVariable); // Output: object
console.log("*********************");

console.log("Array Variable:", arrayVariable); // Output: Array Variable: [ 1, 2, 3, 4, 5 ]
console.log(typeof arrayVariable); // Output: object (arrays are a type of object in JavaScript)
console.log("*********************");

console.log("Function Variable:", functionVariable()); // Output: Function Variable: Hello from a function!
console.log(typeof functionVariable); // Output: function
console.log("*********************");