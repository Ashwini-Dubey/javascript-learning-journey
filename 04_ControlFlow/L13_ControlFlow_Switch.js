/*
Switch statements are used to perform different actions based on different conditions. They are an alternative to using multiple if-else statements when you have a variable that can take on multiple values.

The syntax of a switch statement is as follows:

switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    ...
    default:
        // code to be executed if expression doesn't match any case
}
*/

const day = "Sunday"

switch (day) 
{
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is a weekend");
        break;
    default:
        console.log("Invalid day");
}