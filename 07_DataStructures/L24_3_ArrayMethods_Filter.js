/*
Array.filter() is a method that creates a new array containing only the elements of the original array that pass a specified test implemented by a provided function. It does not modify the original array but instead returns a new array with the filtered values.

Syntax:
const newArray = originalArray.filter(callback(currentValue, index, array) {
  // Return true to keep the element, false otherwise
});

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

Note:

1. A method available on arrays.
2. Used to filter array elements based on a condition
3. Returns a new array with the filtered values
4. Doesn't modify the original array (unless you do it yourself)
*/

const prices = [5000, 10000, 15000, 20000, 25000];

const expensivePrices = prices.filter(price => price >= 15000);

console.log(prices);
console.log(expensivePrices);
