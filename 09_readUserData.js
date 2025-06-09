/**
 * lesson 09: Read User Data
 * Reading user data is a common task in JavaScript, especially in web applications. You can use the `prompt()` function to get input from the user in a browser environment.
 * The `prompt()` function displays a dialog box that prompts the user for input, and it returns the input as a string. You can then process this input as needed.
 * * * Note that `prompt()` is not available in Node.js or non-browser environments, so you may need to use other methods like command-line arguments or libraries for user input in those cases.
*/

/**
 * package to be installed for reading user input in Node.js
 * npm install readline-sync
 */


// Reading user data using prompt

const readlineSync = require("readline-sync")

const userName = readlineSync.question("May i know your name ?")

console.log('Hello ' + userName + '! Welcome to the JavaScript world!');

console.log(`hello ${userName}`);

