/*
Arrays hold ordered lists. They are a collection of items stored at contiguous memory locations. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are dynamic in size, meaning they can grow or shrink as needed.

In JavaScript, arrays are created using square brackets [] and can be initialized with values. For example:

let myArray = [1, 2, 3, 'hello', { name: 'Alice' }, [4, 5]];

You can access elements in an array using their index, which starts at 0. For example:

console.log(myArray[0]); // Output: 1
console.log(myArray[3]); // Output: 'hello'
console.log(myArray[4].name); // Output: 'Alice'
console.log(myArray[5][1]); // Output: 5

Arrays also have various built-in methods for manipulating and working with the data they contain, such as push(), pop(), shift(), unshift(), map(), filter(), and many more.

Overall, arrays are a fundamental data structure in JavaScript that allow you to store and manage collections of data efficiently. 
*/

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Accessing elements in the array
console.log(colors[0]); // Output: "Red"
console.log(colors[2]); // Output: "Blue"
console.log(colors.at(-2));

console.log(colors.length); // Output: 5
console.log(colors.includes("Yellow"));
console.log(colors.indexOf("Green"));

/*
Array.map() is a method that creates a new array by applying a provided function to each element of the original array. It does not modify the original array but instead returns a new array with the transformed values.

Syntax:
const newArray = originalArray.map(callback(currentValue, index, array) {
  // Return the new value for the new array
});

Note:

1. A method available on arrays.
2. Used to transform array elements
3. Returns a new array with the transformed values
4. Doesn't modify the original array (unless you do it yourself)
*/

const price = [5000, 10000, 15000, 20000, 25000];

const discountedPrice = price.map(value => value * 0.5)

console.log(price);
console.log(discountedPrice);