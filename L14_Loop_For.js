/*
For Loop in Javascript is a control flow statement that allows you to execute a block of code repeatedly for a specified number of times. It consists of three main parts: initialization, condition, and increment/decrement.

The syntax of a for loop is as follows:

for (initialization; condition; increment/decrement) {
    // code to be executed
}

- Initialization: This is where you declare and initialize a variable that will be used as a counter. It is executed only once at the beginning of the loop.

- Condition: This is a boolean expression that is evaluated before each iteration of the loop. If the condition evaluates to true, the loop continues to execute. If it evaluates to false, the loop terminates.

- Increment/Decrement: This is where you update the counter variable after each iteration. It can be an increment (e.g., i++) or a decrement (e.g., i--).
*/

for (let i=1; i<=10;i++)
{

    console.log(`5 x ${i} = ${5*i}`);
}

const letters = ['a', 'b', 'c', 'd'];

for (let i=0; i<letters.length; i++)
{
    console.log(letters[i]);
}

for (let i=letters.length - 1; i>=0; i--)
{
    console.log(letters[i]);
}