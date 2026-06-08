/*
Explicit Type Conversion (Type Casting):
Explicit type conversion, also known as type casting, is when you manually convert a value from one data type to another using built-in functions or methods. This allows you to control how values are converted and can help prevent unexpected results that may arise from implicit coercion.
*/

//String to Number
let num = "123";
let convered_num = Number(num);
console.log(convered_num);
console.log(typeof convered_num);

//Number to String
let age = 30;
let converted_age = String(age);
console.log(converted_age);
console.log(typeof converted_age);

//String to Boolean
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false

//Number to Boolean
console.log(Boolean(0));      // false
console.log(Boolean(1));      // true
console.log(Boolean(-1));     // true