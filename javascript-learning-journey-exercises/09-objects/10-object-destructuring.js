// Use destructuring to extract two properties.

const user = {
    name : "Rahul Kumar",
    job : {
        role: "QA Lead",
        experience: 9
    }
};

const {name, job :{role}} = user;


console.log(name);
console.log(role);