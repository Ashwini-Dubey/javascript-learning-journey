/*
Try : Try block contains code that might throw an error.If no error occurs, all the statements inside the try block execute normally.

Catch : Catch executes only if an error occurs inside the try block. It prevents the program from crashing.
*/

try {

    const age = 15;

    if (age < 18) {

        throw new Error("Age should be 18 or above");

    }

    console.log("Registration Successful");

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Execution Completed");

}