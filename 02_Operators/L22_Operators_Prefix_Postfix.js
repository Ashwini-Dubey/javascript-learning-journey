/*
Prefix++ (postfix) and ++ (prefix) are increment operators in JavaScript.

- a++ (postfix): This operator increments the value of 'a' after it has been used in the expression. So, if you use 'a++', it will return the current value of 'a' and then increment it by 1.

- ++b (prefix): This operator increments the value of 'b' before it is used in the expression. So, if you use '++b', it will first increment the value of 'b' by 1 and then return the new value.

In the provided code:
- For 'a', it will print 5 first and then increment 'a' to 6.
- For 'b', it will first increment 'b' to 6 and then print 6. 
*/

let a = 5;
console.log(a++); //First it will print 5, then it will increment a to 6
console.log(a); //Now it will print 6, because a has been incremented in the previous step

let b = 5;
console.log(++b); //First it will increment b to 6, then it will print 6
console.log(b); //Now it will print 6, because b has already been incremented in the previous step