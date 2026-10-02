/* Create:

validateEmail(email)
*/

function validateEmail(email)
{
    if(email.includes("@gmail.com") ||
        email.includes("@outlook.com") || 
        email.includes("@hotmail.com") || 
        email.includes("@yahoo.com") || 
        email.includes("@icloud.com"))
    {
        console.log("Valid Email!")
    }
    else{
        console.log("Invalid Email!")
    }
}
validateEmail("ak213414@outlook.com")