/*
Functions in Javascript can be declared in several ways, including function declarations, function expressions, and arrow functions.

1. Function Declaration:
A function declaration defines a named function that can be called anywhere in the code. It is hoisted, meaning it can be called before it is defined.

Syntax:

function functionName() {
    // code
}

*/

printName(); // This will work because printName is hoisted

function printName() 
{
    console.log("This is a function declaration.");
}

printName();