/**
 * lesson 13: Conditional Statement Exercise
 * In this exercise, you will practice using conditional statements in JavaScript.
 * You will create a program that checks the age of a person and determines if they are an adult or a minor.
 * Follow the instructions below to complete the exercise.
 */


/**
 * A program that read 3 String and print the smallest String. 
*/


const readlineSync = require('readline-sync');

const str1 = readlineSync.question('Enter the first string: ');

const str2 = readlineSync.question('Enter the second string: ');    
const str3 = readlineSync.question('Enter the third string: ');

const l1 = str1.length;
const l2 = str2.length;
const l3 = str3.length;

if(l1<l2 && l1<l3){
    console.log(`The smallest string is: ${str1}`);
}
else if(l2<l1 && l2<l3){
    console.log(`The smallest string is: ${str2}`);
}
else{
    console.log(`The smallest string is: ${str3}`);
}

