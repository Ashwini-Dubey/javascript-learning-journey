/*
Array.reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Syntax:
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

Parameters:
- callback: Function to execute on each element in the array, taking four arguments:
  - accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
  - currentValue: The current element being processed in the array.
  - index (Optional): The index of the current element being processed in the array.
  - array (Optional): The array reduce was called upon.
- initialValue (Optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped.

Returns:
- The single value that results from the reduction.

*/

const cart = [
  { item: "Book",   price: 15, qty: 2 },
  { item: "Pen",    price: 3,  qty: 5 },
  { item: "Bag",    price: 40, qty: 1 },
];

// Total bill
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
// 15×2 + 3×5 + 40×1 = 85