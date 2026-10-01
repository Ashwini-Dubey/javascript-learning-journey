// Use a ternary operator to determine PASS/FAIL.
actualResult = true;
expectedResult = true;

let testStatus = actualResult == expectedResult ? "Pass" : "Fail";

console.log(testStatus)