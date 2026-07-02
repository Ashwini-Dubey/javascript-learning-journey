/*
Map is a data structure that allows you to store key-value pairs. 
It is similar to an object, but it provides better performance for certain operations and allows for keys of any type.

Syntax:
const map = new Map();

Methods:
- set(key, value): Adds a new key-value pair to the map.
- get(key): Retrieves the value associated with the specified key.
- has(key): Checks if the map contains the specified key.
- delete(key): Removes the key-value pair associated with the specified key.
- clear(): Removes all key-value pairs from the map.
- size: Returns the number of key-value pairs in the map.

Example:
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // Output: John
console.log(map.has('age')); // Output: true
map.delete('age');
console.log(map.size); // Output: 1 

*/


const price = [5000, 10000, 15000, 20000, 25000];

const discountedPrice = price.map(value => value * 0.5)

console.log(price);
console.log(discountedPrice);


const student = new Map(); // Create a new Map object
student.set('name', 'John'); // Add key-value pairs to the map
student.set('age', 20); // Add another key-value pair to the map
student.set('grade', 'A'); // Add another key-value pair to the map

console.log(student); // Output: Map(2) { 'name' => 'John', 'age' => 20 }  

console.log(student.get('name')); // Output: John 
console.log(student.has('age')); // Output: true
student.delete('grade'); // Remove the key-value pair with key 'grade'
console.log(student.size); // Output: 2  
console.log(student.clear()); // Remove all key-value pairs from the map


/*
Think of a Map like a dictionary or contact book:

set() → Save a contact 📒
get() → Look up a contact 🔍
has() → Check if the contact exists ✅
delete() → Remove a contact ❌
clear() → Delete all contacts 🗑️
size → Count the total contacts 🔢
*/