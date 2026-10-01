/*
Create a program that checks HTTP status:
200 → Success
400 → Bad Request
401 → Unauthorized
404 → Not Found
500 → Server Error
*/

HTTP_Status = 200

// Using Switch Statement

switch(HTTP_Status) 
{
    case 200 :
        console.log("Success");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case "401":
        console.log("Unauthorized");
        break;
    case "404":
        console.log("Not Found");
        break;
    case "500":
        console.log("Server Error")
        break;
    default:
        console.log("Incorrect Status Code")
}

// Using If-Else if-Else Statement

if (HTTP_Status == 200)
{
   console.log("Success") 
}
else if (HTTP_Status == 400)
{
    console.log("Bad Request");
}
else if (HTTP_Status == 401)
{
    console.log("Unauthorized");
}
else if(HTTP_Status == 404)
{
    console.log("Not Found");
}
else if(HTTP_Status == 500)
{
    console.log("Server Error")
}
else
{
    console.log("Incorrect Status Code")
}