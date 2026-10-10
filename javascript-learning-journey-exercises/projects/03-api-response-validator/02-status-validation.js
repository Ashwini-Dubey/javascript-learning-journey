/*
Task

Validate whether the API returned the expected HTTP status.

For example:

Expected status: 200
Actual status: 200
*/

const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};

const expectedStatus = 200;

if (response.status == expectedStatus) {
  console.log("Test Passed!");
} else {
  console.log("Test Failed!");
}
