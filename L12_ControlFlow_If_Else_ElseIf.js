/*
If Else and Else If statements are used to control the flow of a program based on certain conditions.

The syntax of an if statement is as follows:

if (condition) {
    // code to be executed if condition is true
}

The syntax of an if-else statement is as follows:

if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}

The syntax of an else-if statement is as follows:

if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}
*/

let a = 0;

if (a>0) {
    console.log("a is positive");
}

else if (a<0) {
    console.log("a is negative");
}

else {
    console.log("a is zero")
}