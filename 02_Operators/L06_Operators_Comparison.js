/*
Comparison Operators:
1. == (Equal to)
2. === (Strict Equal to)
3. != (Not Equal to)
4. !== (Strict Not Equal to)
5. > (Greater than)
6. < (Less than)
7. >= (Greater than or equal to)
8. <= (Less than or equal to)
*/

let statusCode = 200;
let expectedStatusCode = 200;

console.log("Equal to:",statusCode == expectedStatusCode) // This will compare the values of statusCode and expectedStatusCode for equality, ignoring their data types.
console.log("Strict Equal to:",statusCode === expectedStatusCode) // This will compare the values and data types of statusCode and expectedStatusCode for strict equality.
console.log("Not Equal to:",statusCode != expectedStatusCode) // This will compare the values of statusCode and expectedStatusCode for inequality, ignoring their data types.
console.log("Strict Not Equal to:",statusCode !== expectedStatusCode) // This will compare the values and data types of statusCode and expectedStatusCode for strict inequality.
console.log("Greater than:",statusCode > expectedStatusCode) // This will check if statusCode is greater than expectedStatusCode.
console.log("Less than:",statusCode < expectedStatusCode) // This will check if statusCode is less than expectedStatusCode.
console.log("Greater than or equal  to:",statusCode >= expectedStatusCode) // This will check if statusCode is greater than or equal to expectedStatusCode.
console.log("Less than or equal to:",statusCode <= expectedStatusCode) // This will check if statusCode is less than or equal to expectedStatusCode.        


/*
=== is used in automation which ensures both value and type match, which avoids unexpected type coercion bugs in test validations.
*/