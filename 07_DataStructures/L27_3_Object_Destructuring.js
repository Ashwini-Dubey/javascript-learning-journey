/*
Destructuring is a JavaScript feature that lets you extract values from objects or arrays and assign them to variables in a clean and concise way.
*/

const employee = {
    id: 101,
    name: "Ashwini",
    company: "TCS"
};

const { id, name, company } = employee;

console.log(id);
console.log(name);
console.log(company);