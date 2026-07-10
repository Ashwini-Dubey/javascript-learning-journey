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
Array
│
├── Access Methods
│     ├── at()
│     ├── includes()
│     ├── indexOf()
│     └── find()
│
├── Iteration Methods
│     ├── forEach()
│     ├── map()
│     ├── filter()
│     ├── reduce()
│     ├── some()
│     └── every()
│
├── Mutation Methods
│     ├── push()
│     ├── pop()
│     ├── shift()
│     ├── unshift()
│     ├── splice()
│     ├── sort()
│     └── reverse()
│
└── Copy Methods
      ├── slice()
      ├── concat()
      └── toSorted() (modern JS)

*/


