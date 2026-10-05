// Access a nested property.

const user = {
    name : "Rahul Kumar",
    job : {
        role: "QA Lead",
        experience: 9
    }
}

console.log(user["job"]["role"]) //Bracket Notation
console.log(user.job.experience) //Dot Notation