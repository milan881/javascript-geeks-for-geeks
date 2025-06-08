/*
*lesson 3: 
let vs var vs const
*In JavaScript, there are three ways to declare variables: `var`, `let`, and `const`.
*1. `var` is function-scoped and can be re-declared and updated. It is hoisted to the top of its scope.
*2. `let` is block-scoped and can be updated but not re-declared in the same scope. It is also hoisted, but not initialized.
*3. `const` is also block-scoped but cannot be updated or re-declared, making it a constant value. It must be initialized at the time of declaration.
*/

var globalVar = "I am a global variable"; // Global variable
globalVar = "Hello, World!"; // Assigning a value to the variable
console.log(globalVar); // Output: I am a global variable


let blockScopedVar = "I am a block-scoped variable"; // Block-scoped variable
//let blockScopedVar = "Hello, Geeks!"; it is not allowed to re-declare a variable with let in the same scope
console.log(blockScopedVar); // Output: I am a block-scoped variable

const constantVar = "I am a constant variable"; // Constant variable
//constantVar = "Hello, Geeks!"; // Error: Assignment to constant variable  
console.log(constantVar); // Output: I am a constant variable