/*
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

const stack = [];

// push adds to the end of the array
stack.push("first");
stack.push("second","third");
console.log(stack);

// pop removes the last item from the array and returns it
const last = stack.pop();

// the stack is mutated, the last item is removed
console.log(last);
console.log(stack);

// shift removes the first item from the array and returns it
const first = stack.shift();

// the stack is mutated, the first item is removed
console.log(first);
console.log(stack);

// unshift adds items to the beginning of the array
stack.unshift("new first");
console.log(stack); 

//splice can be used to add or remove items at any position in the array
stack.splice(1, 0, "new second"); // adds "new second" at index 1 without removing any items
console.log(stack);

stack.splice(2, 1); // removes 1 item at index 2
console.log(stack); 

// sort can be used to sort the items in the array
stack.push("another item");
stack.push("yet another item");
console.log(stack);

stack.sort(); // sorts the items in place
console.log(stack); 

// reverse can be used to reverse the order of the items in the array
stack.reverse(); // reverses the items in place
console.log(stack); 

// fill can be used to fill the array with a specific value
stack.fill("filled"); // fills the entire array with "filled"
console.log(stack); 

// splice can also be used to replace items in the array
stack.splice(1, 2, "replaced"); // replaces 2 items at index 1 with "replaced"
console.log(stack);

// copyWithin can be used to copy a portion of the array to another location within the same array
stack.push("copy this");
stack.push("and this");
console.log(stack);

stack.copyWithin(0, 2, 4); // copies items from index 2 to 4 and pastes them starting at index 0
console.log(stack); 