/*
Objects are a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

Syntax:
var object_name = {
   property_1: value_1,
   property_2: value_2,
   ...
   property_n: value_n
};  
*/

const person = {
    firstName: "John", 
    age: 30,
    lastName: "Doe"
};

// Dot notation
console.log(person.firstName);
console.log(person.age);
console.log(person.lastName);

// Bracket notation
console.log(person["firstName"]);
console.log(person["age"]);
console.log(person["lastName"]);

// Adding new properties
person.gender = "Male";
console.log(person.gender);

person.salary = 100000;
console.log(person["salary"]);

//delete person.age;  
console.log(person.age); // undefined