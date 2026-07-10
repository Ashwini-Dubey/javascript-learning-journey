/*
Filter is a method that creates a new array with all elements that pass the test implemented by the provided function. It does not change the original array.

Syntax:
const newArray = array.filter(callback(element[, index[, array]])[, thisArg]);

Parameters:
- callback: A function that is called for every element in the array. It should return true to keep the element, or false to remove it.
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed in the array.
- array (optional): The array filter was called upon.
- thisArg (optional): Value to use as this when executing callback.

Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] 
*/

