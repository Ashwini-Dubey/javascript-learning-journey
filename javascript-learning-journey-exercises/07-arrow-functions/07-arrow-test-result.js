// Create an arrow function that returns PASS/FAIL.

const generateResult = (actualResult,expectedResult) =>
{
    if (actualResult == expectedResult)
    {
        return "PASS";
    }
    else
    {
        return "FAIL";
    }
}

console.log(generateResult("Login Successful","Login Successful"));