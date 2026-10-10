/*
Now combine your validations into a reusable function.

Goal

Create:

function validateResponse() {
    // validation logic
}

The function should validate:

Status
User ID
Name
Active status
*/

// 1. Simulated API response
const response = {
  status: 200,
  body: {
    userId: 101,
    name: "Ashwini",
    active: true,
  },
};
// 2. Expected Values
const expectedStatus = 200;
const expectedUserId = 101;
const expectedName = "Ashwini";
const expectedActiveStatus = true;

function validateResponse() {
  if (
    response.status === expectedStatus &&
    response.body.userId === expectedUserId &&
    response.body.name === expectedName &&
    response.body.active === expectedActiveStatus
  ) {
    console.log("Test Passed.");
  } else {
    console.log("Test Failed.");
  }
}

validateResponse();
