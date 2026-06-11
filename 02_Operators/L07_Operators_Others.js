/*
Other Operators:
1. typeof (Type of operator)
2. instanceof (Instance of operator)
3. in (In operator)
4. delete (Delete operator)       
*/


// 1. typeof (checks data type)
let name = "Ashwini";
let age = 30;

console.log(typeof name); // string
console.log(typeof age);  // number


// 2. instanceof (checks object type / class instance)
let date = new Date();

console.log(date instanceof Date); // true

// 3. in operator (checks if property exists in object)
let car = {
    brand: "Toyota",
    model: "Innova"
};

console.log("brand" in car);  // true
console.log("price" in car);  // false


// 4. delete operator (removes property from object)
let student = {
    name: "Rahul",
    age: 25
};

delete student.age;

console.log(student);