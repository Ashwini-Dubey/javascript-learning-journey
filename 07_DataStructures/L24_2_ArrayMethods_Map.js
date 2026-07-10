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