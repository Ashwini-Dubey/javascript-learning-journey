//Function with Parameters
function printName (name) 
{
    console.log("Hello, ",name);
}

printName("Ashwini");

//Function with Return Values
function add (a,b) {
    return a+b;
}

let result = add (20,30);
console.log(result);

//Function with Default Parameters
function greet (name = "Guest") {
    console.log("Welcome, ", name);
}

greet(); // Output: Welcome, Guest
greet("Ashwini"); // Output: Welcome, Ashwini