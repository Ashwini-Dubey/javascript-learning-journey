//This is a program for Javascript Variables.

/*
Types of Variables in Javascript:
1. var
2. let
3. const

Difference between var, let, and const:
1. Scope: 'var' has function scope, while 'let' and 'const' have block scope. This means that variables declared with 'var' are accessible throughout the entire function, while variables declared with 'let' and 'const' are only accessible within the block they are defined in.

2. Hoisting: Variables declared with 'var' are hoisted to the top of their scope and initialized with 'undefined', while variables declared with 'let' and 'const' are also hoisted but not initialized. This means that if you try to access a variable declared with 'let' or 'const' before its declaration, you will get a ReferenceError.

3. Reassignment: Variables declared with 'var' and 'let' can be reassigned to new values, while variables declared with 'const' cannot be reassigned after they have been assigned a value.

4. Redeclaration: Variables declared with 'var' can be redeclared within the same scope, while variables declared with 'let' and 'const' cannot be redeclared within the same scope.

Data Types in Javascript:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
*/

var a = 4; //This is a variable declaration and initialization with ES5.
console.log(a); //This will print the value of variable 'a' to the console.
console.log(typeof(a)); //This will print the data type of variable 'a' to the console. 

let b = 234.6; //This is a variable declaration and initialization with ES6.
console.log(b); 
console.log(typeof(b)); 

const c = "Ashwini Dubey"; //This is a variable declaration and initialization with ES6.
console.log(c); 
console.log(typeof(c)); 

const d = true; //This is a variable declaration and initialization with ES6.
console.log(d); 
console.log(typeof(d));







