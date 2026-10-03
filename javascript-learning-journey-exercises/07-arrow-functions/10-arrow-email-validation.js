// Create an arrow function that checks whether an email contains @.

const emailValidator = (email) => {
    if(email.includes("@"))
    {
        return "Valid Email!"
    }
    else{
        return "Invalid Email!"
    }
}

console.log(emailValidator("ak213414gmail.com"))