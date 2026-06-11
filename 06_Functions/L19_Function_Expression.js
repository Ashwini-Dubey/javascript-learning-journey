/*
Function Expression: A function expression is when a function is assigned to a variable. It can be anonymous (without a name) or named. Function expressions are not hoisted, so they cannot be called before they are defined.

Syntax:

const functionName = function() {
    // code
};
*/

//printName(); // This will throw an error because printName is not defined yet

const printName = function() 
{
    console.log("This is a function expression.");
}

printName();