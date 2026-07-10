/*
In JavaScript, arrays are mutable data structures, which means that their contents can be changed after they are created. There are several methods available for mutating arrays, including:

| Method         | Purpose                  |
| -------------- | ------------------------ |
| `push()`       | Add to end               |
| `pop()`        | Remove from end          |
| `shift()`      | Remove from beginning    |
| `unshift()`    | Add to beginning         |
| `splice()`     | Insert/remove/replace    |
| `sort()`       | Sort elements            |
| `reverse()`    | Reverse array            |
| `fill()`       | Fill values              |
| `copyWithin()` | Copy elements internally |

*/

// Example usage of array mutation methods
// Create an empty stack
const stack = [];

// push adds to the end of the array
stack.push("first");
stack.push("second","third");
console.log("Example of push method:", stack);

// pop removes the last item from the array and returns it
const last = stack.pop();

// the stack is mutated, the last item is removed
console.log("Example of pop method - Removed Element:", last);
console.log("Example of pop method:", stack);

// shift removes the first item from the array and returns it
const first = stack.shift();

// the stack is mutated, the first item is removed
console.log("Example of shift method - Removed Element:", first);
console.log("Example of shift method:", stack);

// unshift adds items to the beginning of the array
stack.unshift("new first");
console.log("Example of unshift method:", stack); 

//splice can be used to add or remove items at any position in the array
// to add items, we specify the index to start at, the number of items to remove (0 in this case), and the items to add.
stack.splice(1, 0, "new second"); // adds "new second" at index 1 without removing any items
console.log("Example of splice method:", stack);

stack.splice(2, 1); // removes 1 item at index 2
console.log("Example of splice method:", stack);

// sort can be used to sort the items in the array
stack.push("another item");
stack.push("yet another item");
console.log( stack);
stack.sort(); // sorts the items in place
console.log("Example of sort method:", stack); 

// reverse can be used to reverse the order of the items in the array
stack.reverse(); // reverses the items in place
console.log("Example of reverse method:", stack); 

// fill can be used to fill the array with a specific value
stack.fill("filled"); // fills the entire array with "filled"
console.log("Example of fill method:",stack); 

// splice can also be used to replace items in the array
stack.splice(1, 2, "replaced"); // replaces 2 items at index 1 with "replaced"
console.log("Example of splice method:", stack);

// copyWithin can be used to copy a portion of the array to another location within the same array
stack.push("copy this");
stack.push("and this");
console.log(stack);

stack.copyWithin(0, 2, 4); // copies items from index 2 to 4 and pastes them starting at index 0
console.log("Example of copyWithin method:", stack); 