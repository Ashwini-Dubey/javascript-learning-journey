/*
For...Of Loop
The for...of loop is a new loop introduced in ES6 that allows you to iterate over iterable objects such as arrays, strings, maps, sets, and more. It provides a simpler and more concise syntax compared to traditional loops.

Syntax:
for (variable of iterable) {
  // code to be executed
}
*/

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
