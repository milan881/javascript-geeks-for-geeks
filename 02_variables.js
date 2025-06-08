/*
*Lession - 2
*why variables 
*Variables are used to store data that can be used later in the program.
*They allow us to give names to values, making our code more readable and maintainable.
*Variables can hold different types of data, such as numbers, strings, and objects.
*In JavaScript, we can declare variables using the keywords `var`, `let`, or `const`. 
*`var` is function-scoped and can be re-declared and updated.
*`let` is block-scoped and can be updated but not re-declared in the same scope.
*`const` is also block-scoped but cannot be updated or re-declared, making it a constant value.


what is variable?
*Variables are containers for storing data values. They allow us to store information that can be used and manipulated throughout our code.
// Example of declaring variables
let name = "John"; // String variable
let age = 30; // Number variable
let isStudent = true; // Boolean variable

*Diffrent ways to create variables
*var name = "John"; // Using var
let age = 30; // Using let
const pi = 3.14; // Using const
*Variables can be updated or changed later in the code, except for constants declared with `const`.
*/

var message;

message = "Hello, World!"; // Assigning a value to the variable
message = "Hello, Geeks!"; // Updating the value of the variable

console.log(message); // Output: Hello, World!



let userName = "John"; // String variable
let age = 30; // Number variable    

console.log(userName); // Output: John
console.log(age); // Output: 30

const pi = 3.14; // Constant variable
 pi = 3.1; // Error: Assignment to constant variable
console.log(pi); // Output: 3.14