// Create a function that returns PASS/FAIL.
function testResult(testStatus)
{
    if (testStatus === 1)
    {
        return "PASS" ;
    }
    else
    {
        return "FAIL";
    }
}

console.log(testResult(1));