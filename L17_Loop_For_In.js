/*
For...in Loop
The for...in loop is used to iterate over the enumerable properties of an object. It allows you to access the keys of an object, which can be useful when you want to perform operations on the properties of an object.

Syntax:
for (variable in object) {
  // code to be executed
}
*/

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}