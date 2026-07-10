/*
A nested object is an object inside another object. Think of it like a folder inside another folder.
*/

const employee = {
    name: "Ashwini",
    age: 30,
    address: {
        city: "Prayagraj",
        state: "Uttar Pradesh",
        pincode: 211001
    }
};

console.log(employee.name);
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.pincode);

// Adding new properties to nested object
employee.address.country = "India";
console.log(employee.address.country); //Dot Notation
console.log(employee["address"]["city"]); // Bracket Notation
console.log(employee.address["state"]); // Mixed Notation

// Deleting a property from nested object
delete employee.address.pincode;
console.log(employee.address.pincode); // undefined