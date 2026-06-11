/*
Arrow Function:
Arrow functions provide a shorter syntax for writing functions. They do not have their own 'this' context and are always anonymous.

Syntax:

const functionName = () => {
    // code
};
  
*/

const printName = () => {
    console.log("This is an arrow function.");
}

printName();

//Arrow functions with no parameters
const arrow_NoParams = () => 
{
    console.log("This is an arrow function with no parameters.");
}

arrow_NoParams();

//Arrow functions with one parameter
const arrow_OneParam = message => 
{
    console.log(message);
}

arrow_OneParam("This is an arrow function with one parameter.");

//Arrow functions with multiple parameters
const arrow_MultipleParams = (a,b) =>
{
    console.log(a+b);

}
arrow_MultipleParams(5,10);

//Arrow functions with implicit return
const arrow_ImplicitReturn = (a,b) => a * b;

console.log(arrow_ImplicitReturn(5,10));