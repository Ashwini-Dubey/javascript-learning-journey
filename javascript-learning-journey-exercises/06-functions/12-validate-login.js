/*
Create:

validateLogin(username, password)
*/

function validateLogin(username,password)
{
    if(username == "admin" && password == "admin123")
    {
        console.log("Login Successful!");
    }
    else{
        console.log("Login Unsuccessful!")
    }
}

validateLogin("admin","admin23")