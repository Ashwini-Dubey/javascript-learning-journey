/*
Object methods are built-in functions provided by JavaScript's Object class that help us inspect, manipulate, and work with objects.

Methods:
1. Object.keys(obj): Returns an array of a given object's own enumerable property names.
2. Object.values(obj): Returns an array of a given object's own enumerable property values.
3. Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

Syntax:
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
*/

const person = {
    firstName: "John", 
    age: 30,
    lastName: "Doe"
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));